export default {
  staves: {
    height: 40,
    separatorLines: 10,
    defaultLines: 5,
    marginTopDown: 20,
    tablatureDefaultLines: 6,
    minTablatureLines: 4,
    maxTablatureLines: 12,
    heightTablatures: {
      4: 30,
      5: 40,
      6: 50,
      7: 60,
      8: 70,
      9: 80,
      10: 90,
      11: 100,
      12: 110,
    },
  },
  bar: {
    defaultWidth: 80,
  },
  figures: {
    w: {
      type: "whole_note",
      ticks: 192,
      width: 80,
    },
    h: {
      type: "half_note",
      ticks: 96,
      width: 40,
    },
    q: {
      type: "quarter_note",
      ticks: 48,
      dotted: 24,
      triplets: 32,
      triplets_dotted: 16,
      width: 20,
    },
    8: {
      type: "eight_note",
      ticks: 24,
      width: 20,
    },
    16: {
      type: "sixteen_note",
      ticks: 12,
      width: 20,
    },
    32: {
      type: "thirtytwo_note",
      ticks: 6,
      width: 20,
    },
    64: {
      type: "sixtyfour_note",
      ticks: 3,
      width: 20,
    },
  },
};
