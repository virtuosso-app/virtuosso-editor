export interface StaveOptions {
  lines: number;
  compasses: Array<{}>
}

const STAVE_MARGIN = 20
const STAVE_SEPARATOR_LINES = 10
export class Stave {
  lines: number;
  compasses: Array<{}>
  constructor({lines, compasses}: StaveOptions) {
    this.lines = lines;
    this.compasses = compasses
    this.render();
  }

  render() {
    const heightStave = this.lines * STAVE_SEPARATOR_LINES
    const height = STAVE_MARGIN*2 + (heightStave)
    let content = `
      <div style="position:relative; width: 100%; height: auto;">
        ${this.getClaf()}
        <svg width="100%" height="${height}px">`
        for (let i = 0; i < this.lines; i++) {
          const yCoord = STAVE_MARGIN + (i === 0 ? 0 : i * STAVE_SEPARATOR_LINES)
          content += `<line x1="0" y1="${yCoord}" x2="100%" y2="${yCoord}" stroke="black" />`
        }
    content += `
        </svg>
        `

    content += `<div style="position:absolute; top:01px; left:50px; width: 200px; height: ${height}px; background: blue;">compass</div>`
    content += `
      </div>
    `

   

    return content
  }


  getClaf() {
    return ''
  }
}