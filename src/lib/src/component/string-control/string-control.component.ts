import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SchemaEditorService} from "../../service/schema-editor.service";

@Component({
  selector: 'string-control',
  templateUrl: './string-control.component.html',
  styleUrls: ['./string-control.component.css']
})
export class StringControlComponent implements OnInit {
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


  @Input()
  public data: any;

  @Input()
  public parentPath: string = '';

  public get path():string  {
    return this.parentPath + '.' + this.data.key;
  }



  fields: Array<string> = ['enum', 'maxLength', 'minLength', 'description', 'format'];
  formats: Array<string> = ['date-time', 'email', 'hostname', 'ipv4', 'ipv6', 'uri', 'uri-reference', 'uri-template', 'json-pointer', 'uuid'];

  @Output()
  public keyChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public removeProperty: EventEmitter<any> = new EventEmitter<any>();


  constructor(public schemaService:SchemaEditorService) {
  }

  ngOnInit() {
  }

  onKeyChanged(newKey: string) {
    this.data.key = newKey;
    this.keyChanged.emit();

  }


  addField(field: string) {
    if (field === 'maxLength' || field === 'minLength') {
      this.data.data[field] = 0;
    } else if (field === 'enum') {
      this.data.data[field] = [];
    } else if (field === 'description' || field === 'format') {
      this.data.data[field] = '';
    }
  }

  deleteField(field: string) {
    delete this.data.data[field];
  }

  deleteProperty() {
    this.removeProperty.emit(this.data);
  }

}
