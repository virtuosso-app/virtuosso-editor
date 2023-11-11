import { Stave } from "./Stave";
import clafF from './svgs/clafF.svg';
const LINES = 5

export class StaveF extends Stave {

  constructor({ compasses }: any) {
    super({lines: LINES, compasses})
  }

  getClaf() {
    return `
        <div style="position: absolute; top:20px;left:5px;width: 32px; word-wrap: break-word; text-align: center; font-weight: bold;">
          <img src="${clafF}" width="100%" />
        </div>
        `
  }

  // render() {
  //   const content = `
  //     <div style="position:relative; width: 100%; height: auto;">
  //       <div style="position: absolute; top:20px;left:5px;width: 32px; word-wrap: break-word; text-align: center; font-weight: bold;">
  //         <img src="${clafF}" width="100%" />
  //       </div>
  //       ${super.render()}
  //     </div>
  //   `
  //   return content;
  // }
}