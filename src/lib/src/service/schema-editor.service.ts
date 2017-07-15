/**
 * Created by benjamindobler on 15.07.17.
 */


export class SchemaEditorService {


  public controlMap: any = {};


  public registerControl(path: string) {
    if (!this.controlMap[path]) {
      this.controlMap[path] = {};
    }
  }

  collapseAll() {
    for (let i in this.controlMap) {
      if (i !== 'root') {
        this.controlMap[i].collapsed = true;
      }
    }
  }

  unCollapseAll() {
    for (let i in this.controlMap) {
      if (i !== 'root') {
        this.controlMap[i].collapsed = false;
      }
    }
  }


}
