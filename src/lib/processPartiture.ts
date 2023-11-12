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
  const { bars } = partiture;

  const staves = [];
  let currentSlave = { bars: [], totalWidth: 0 };

  for (const currentBar of bars) {
    const currentBarWidth = calculateBarWidth(currentBar);
    currentBar.width = currentBarWidth;
    if (currentSlave.totalWidth + currentBarWidth > widthScreen) {
      staves.push(currentSlave);
      currentSlave = { bars: [], totalWidth: 0 };
    }

    currentSlave.bars.push(currentBar);
    currentSlave.totalWidth += currentBarWidth;
  }

  // Agrega la última sección si es necesario
  if (currentSlave.bars.length > 0) {
    staves.push(currentSlave);
  }

  return staves;
}
