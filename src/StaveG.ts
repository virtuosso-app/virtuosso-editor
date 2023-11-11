import { Stave } from "./Stave";
import clafG from './svgs/clafG.svg'
const LINES = 5

export class StaveG extends Stave {

  constructor({ compasses }: any) {
    super({lines: LINES, compasses})
  }

  getClaf() {
    return `
        <div style="position: absolute; top:5px;left:5px;width: 32px; word-wrap: break-word; text-align: center; font-weight: bold;">
          <img src="${clafG}" width="100%" />
        </div>
        `
  }


}