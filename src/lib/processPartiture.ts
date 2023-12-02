import { default as config } from "../config/editor";

export interface Note {
  note: string;
  figure: string;
  dotted: boolean;
  triplets: boolean;
  triplests_dotted: boolean;
}
export interface Bar {
  ticks: number;
  notes: Note[];
}

export interface Partiture {
  clefG: boolean;
  clefF: boolean;
  tablature: boolean;
  tablatureLines: number;
  bars: Bar[];
  barsF: Bar[];
}

function calculateBarWidth(bar: Bar) {
  if (bar.notes.length === 0) {
    return config.bar.defaultWidth;
  }

  let width = 0;
  for (const note of bar.notes) {
    width += config.figures[note.figure].width;
  }
  return width;
}

export function processPartiture(partiture: Partiture, widthScreen: number) {
  // TODO: Hay que procesar el width del header: clef, time signature, etc.
  const { bars, barsF } = partiture;

  const barMargin = config.bar.margin;
  // ClefG
  const stavesG = [];
  const stavesF = [];
  let currentStave = { bars: [], totalWidth: 0 };
  let currentStaveF = { bars: [], totalWidth: 0 };

  for (let i = 0; i < bars.length; i++) {
    const currentBar = bars[i];
    const currentBarWidth = calculateBarWidth(currentBar) + barMargin;
    let currentBarF = null;
    if (partiture.clefF && barsF.length > i) {
      currentBarF = barsF[i];
      const currentBarFWidth = calculateBarWidth(currentBarF) + barMargin;
      if (currentBarWidth > currentBarFWidth) {
        currentBar.width = currentBarWidth;
        currentBarF.width = currentBarWidth;
      } else {
        currentBar.width = currentBarFWidth;
        currentBarF.width = currentBarFWidth;
      }
    } else {
      currentBar.width = currentBarWidth;
    }
    if (currentStave.totalWidth + currentBarWidth > widthScreen) {
      stavesG.push(currentStave);
      currentStave = { bars: [], totalWidth: 0 };
      if (currentBarF) {
        stavesF.push(currentStaveF);
        currentStaveF = { bars: [], totalWidth: 0 };
      }
    }

    currentStave.bars.push(currentBar);
    currentStave.totalWidth += currentBarWidth;
    if (currentBarF) {
      currentStaveF.bars.push(barsF[i]);
      currentStaveF.totalWidth += currentBarWidth;
    }
  }

  // Agrega la última sección si es necesario
  if (currentStave.bars.length > 0) {
    stavesG.push(currentStave);
    stavesF.push(currentStaveF);
  }

  return { stavesG, stavesF };
}
