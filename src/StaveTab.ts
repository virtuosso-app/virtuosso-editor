import { Stave } from "./Stave";

const LINES = 6

export interface StaveTabOptions {
  strings?: number;
}


export class StaveTab extends Stave {

  constructor({strings = LINES}: StaveTabOptions) {
    super({lines: strings})
  }

  render() {
    const height = (this.lines * 10)
    let fontSize = 12
    if(this.lines > 4) fontSize = 16
    if(this.lines > 9) fontSize = 20
    
    const content = `
      <div style="position:relative; width: 100%; height: auto;">
        <div style="position: absolute;top:10px;left:5px;font-size: ${fontSize}px;width: 20px; height: ${height}px; display: flex; align-items:center; ">
          <span style="writing-mode: vertical-lr;text-orientation: upright;font-weight: bold;">TAB</span>
        </div>
        ${super.render()}
      </div>
    `
    return content;
  }
}