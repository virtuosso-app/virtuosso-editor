import { Stave } from "./Stave";
import clafF from './svgs/clafF.svg';
const LINES = 5

export class StaveF extends Stave {

  constructor() {
    super({lines: LINES})
  }

  render() {
    // TODO: el top 18px deberia ser 0px, el stade no esta alineado arriba
    const content = `
      <div style="position:relative; width: 100%; height: auto;">
        <div style="position: absolute; top:15px;left:5px;width: 32px; word-wrap: break-word; text-align: center; font-weight: bold;">
          <img src="${clafF}" width="100%" />
        </div>
        ${super.render()}
      </div>
    `
    return content;
  }
}