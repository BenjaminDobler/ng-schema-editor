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

  get parentPath(): string {
    return this._parentPath;
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
      return this.parentPath + '.' + this._data.key;
    }
    return this._data.key;
  }

  public onDataChanged() {

  }


  constructor(public schemaService: SchemaEditorService) {

  }


  shadeColor2(color: string, percent: number) {
    var f: any = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent,
      R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }

  getColor() {
    return (this.path.split('.').length / 10);
  }


  getBackground() {
    return '#ffffff';
    //return this.shadeColor2('#00ff00', this.getColor());
  }

  addField(field: string) {
    if (field === 'maxLength' || field === 'minLength' || field === 'minimum' || field === 'maximum') {
      this.data.data[field] = 0;
    } else if (field === 'enum') {
      this.data.data[field] = [];
    } else if (field === 'description' || field === 'format') {
      this.data.data[field] = '';
    } else if (field === 'required') {
      this.data.data[field] = [];
    }
  }

  deleteField(field: string) {
    delete this.data.data[field];
  }

  deleteProperty() {
    this.removeProperty.emit(this.data);
  }


  getFields() {
    let fieldKeys:Array<any> = [];
    for(let i in this.data.data) {
      fieldKeys.push({
        key: i,
      });
    }
    return fieldKeys;
  }




}
