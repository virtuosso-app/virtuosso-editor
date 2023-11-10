import { Stave } from "./Stave";
import clafG from './svgs/clafG.svg'
const LINES = 5

export class StaveG extends Stave {

  constructor() {
    super({lines: LINES})
  }

  render() {
    const content = `
      <div style="position:relative; width: 100%; height: auto;">
        <div style="position: absolute;top:5px;left:5px;width: 32px; word-wrap: break-word; text-align: center; font-weight: bold;">
          <img src="${clafG}" width="100%" />
        </div>
        ${super.render()}
      </div>
    `
    return content;
  }


}