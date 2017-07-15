/**
 * Created by benjamindobler on 15.07.17.
 */




export class SchemaEditorService {




  public controlMap:any = {};



  public registerControl(path) {
    if (!this.controlMap[path]) {
      this.controlMap[path] = {};
    }
  }


}
