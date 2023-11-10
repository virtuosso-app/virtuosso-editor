import { StaveG } from './StaveG';
import { StaveF } from './StaveF';
import { StaveTab } from './StaveTab';



export interface VirtuossoEditorOptions {
    elementId: string;
    tablature?: boolean;
    tablatureStrings?: number;
    staveF?: boolean;
    staveG?: boolean;

}

export class VirtuossoEditor {

    elementId: string;

    tablature: boolean = false;
    tablatureStrings: number = 6;

    staveF: boolean = false;
    staveG: boolean = true;



    bodyToRender: string = ''
    constructor({ elementId, tablature, tablatureStrings, staveF, staveG = true }: VirtuossoEditorOptions) {
      this.elementId = elementId;
      this.tablature = tablature || false;
      this.tablatureStrings = tablatureStrings || 6;
      this.staveF = staveF || false;
      this.staveG = staveG;

      console.log('VirtuossoEditor');
      this.generateStaves()
      
      this.render();
    }


    render() {
      const element = document.getElementById(this.elementId);
      if (element) {
        const body = `
            <div style="width: 100%; height: 100%; background-color: #f0f0f0; display: flex; flex-direction: column;">
              ${this.getBodyToRender()}
            </div>`
        element.innerHTML = body
      }
    }


    getBodyToRender() {
      return this.bodyToRender;
    }

    private generateStaves() {

      if(this.staveG) {
        this.bodyToRender += this.generateStaveG()
      }

      if(this.staveF) {
        this.bodyToRender += this.generateStaveF()
      }

      if(this.tablature) {
        this.bodyToRender += this.generateTablature(this.tablatureStrings)
      }

      // load lines to join staves
    }

    private generateStaveG() {
      const stave = new StaveG()
      return stave.render()
    }

    private generateStaveF() {
      const stave = new StaveF()
      return stave.render()
    }

    private generateTablature(strings: number) {
      const stave = new StaveTab({strings})
      return stave.render()
    }


}