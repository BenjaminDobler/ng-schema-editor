/**
 * Created by benjamindobler on 08.07.17.
 */


import {Component, Input} from '@angular/core';
import {SchemaEditorService} from '../service/schema-editor.service';
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
    this.rootItem = {
      key: 'root',
      data: this._schema
    };
  }

  public rootItem: any;
  private _schema: any;

  constructor(public schemaService: SchemaEditorService) {

  }


  getSchemaJsonString() {
    return JSON.stringify(this.rootItem.data, null, 4);

  }


  collapseAll() {
    this.schemaService.collapseAll();
  }

  unCollapseAll() {
    this.schemaService.unCollapseAll();
  }


}
