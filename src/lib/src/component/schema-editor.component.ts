/**
 * Created by benjamindobler on 08.07.17.
 */


import {Component, Input} from "@angular/core";
@Component({
  selector: 'schema-editor',
  templateUrl: './schema-editor.component.html',
  styleUrls: ['./schema-editor.component.css']
})
export class SchemaEditorComponent {


  get schema(): any {
    return this._schema;
  }

  @Input()
  set schema(value: any) {
    this._schema = value;
    this.updateProps();
    console.log(this.props);
  }

  updateProps() {
    this.props = [];
    for(var i in this._schema.properties) {
      this.props.push({
        key: i,
        data: this._schema.properties[i]
      });
    }
  }

  public controlTypes:Array<string> = ['string', 'number', 'array'];
  public props:Array<any> = [];

  private _schema:any;


  constructor() {
    console.log('hallo');
  }

  getProperties() {
    console.log("Get Schema ", this._schema.properties);
    return this._schema.properties;
  }


  onKeyChanged() {
    let newSchema:any = Object.assign({}, this.schema);
    let newProperties = {};
    this.props.forEach((p)=>{
      newProperties[p.key] = p.data;
    });
    newSchema.properties = newProperties;
    this.schema = newSchema;
  }

  getSchemaJsonString() {
    return JSON.stringify(this.schema, null, 4);

  }

  public addProperty(type:string) {
    this.schema.properties.untitled = {
      type: 'string',
      description: 'tbd'
    }
    this.updateProps();
  }


}
