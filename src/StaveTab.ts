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
    // TODO: el top 30px deberia ser 0px, el stade no esta alineado arriba
    const height = (this.lines * 10) - 5
    const top = 10
    const content = `
      <div style="position:relative; width: 100%; height: auto;">
        <div style="position: absolute;top:12px;left:5px;font-size: 18px;width: 20px; height: ${height}px; background: red;display: flex; flex-direction: column; justify-content: center; word-wrap: break-word; text-align: center; font-weight: bold;">TAB</div>
        ${super.render()}
      </div>
    `
    return content;
  }
}