export interface StaveOptions {
  lines: number;
}

const STAVE_MARGIN = 20
const STAVE_SEPARATOR_LINES = 10
export class Stave {
  lines: number;
  constructor({lines}: StaveOptions) {
    this.lines = lines;
    this.render();
  }

  render() {
    let height = STAVE_MARGIN*2 + (this.lines * STAVE_SEPARATOR_LINES)
    let content  =  `<svg width="100%" height="${height}px">`
    for (let i = 0; i < this.lines; i++) {
      const yCoord = STAVE_MARGIN + (i === 0 ? 0 : i * STAVE_SEPARATOR_LINES)
      content += `<line x1="0" y1="${yCoord}" x2="100%" y2="${yCoord}" stroke="black" />`
    }
    content += '</svg>'

    return content
  }
}