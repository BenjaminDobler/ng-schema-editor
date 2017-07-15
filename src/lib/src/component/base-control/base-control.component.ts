import {SchemaEditorService} from '../../service/schema-editor.service';
import {EventEmitter, Input, Output} from '@angular/core';
/**
 * Created by benjamindobler on 15.07.17.
 */


export class BaseControl {
  get data(): any {
    return this._data;
  }

  @Input()
  set data(value: any) {
    this._data = value;
    this.onDataChanged()
  }


  @Output()
  public keyChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public removeProperty: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set parentPath(value: string) {
    this._parentPath = value;
    if (value) {
      this.schemaService.registerControl(this.path);
    }
  }

  get collapsed(): boolean {
    if (!this.schemaService.controlMap[this.path]) {
      return false;
    }
    return this.schemaService.controlMap[this.path].collapsed;
  }

  set collapsed(value: boolean) {
    this._collapsed = value;
    if (!this.schemaService.controlMap[this.path]) {
      this.schemaService.controlMap[this.path] = {};
    }
    this.schemaService.controlMap[this.path].collapsed = value;
  }

  private _collapsed: boolean = false;


  private _data: any;


  private _parentPath: string = '';

  public get path(): string {
    if (this.parentPath != '') {
      this.parentPath + '.' + this._data.key;
    }
    return this._data.key;
  }

  public onDataChanged() {

  }


  constructor(public schemaService: SchemaEditorService) {

  }


}
