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

function processClef(bars, widthScreen: number) {
  // ClefG
  const staves = [];
  let currentStave = { bars: [], totalWidth: 0 };

  for (const currentBar of bars) {
    const currentBarWidth = calculateBarWidth(currentBar);
    currentBar.width = currentBarWidth;
    if (currentStave.totalWidth + currentBarWidth > widthScreen) {
      staves.push(currentStave);
      currentStave = { bars: [], totalWidth: 0 };
    }

    currentStave.bars.push(currentBar);
    currentStave.totalWidth += currentBarWidth;
  }

  // Agrega la última sección si es necesario
  if (currentStave.bars.length > 0) {
    staves.push(currentStave);
  }

  return staves;
}
export function processPartiture(partiture: Partiture, widthScreen: number) {
  // TODO: Hay que procesar el width del header: clef, time signature, etc.
  const { bars, barsF } = partiture;

  const stavesG = processClef(bars, widthScreen);
  const stavesF = processClef(barsF, widthScreen);

  return { stavesG, stavesF };
}
