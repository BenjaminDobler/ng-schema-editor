import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SchemaEditorService} from "../../service/schema-editor.service";
import {BaseControl} from "../base-control/base-control.component";

@Component({
  selector: 'string-control',
  templateUrl: './string-control.component.html',
  styleUrls: ['./string-control.component.css']
})
export class StringControlComponent extends BaseControl implements OnInit {





  fields: Array<string> = ['enum', 'maxLength', 'minLength', 'description', 'format'];
  formats: Array<string> = ['date-time', 'email', 'hostname', 'ipv4', 'ipv6', 'uri', 'uri-reference', 'uri-template', 'json-pointer', 'uuid'];




  constructor(public schemaService:SchemaEditorService) {
    super(schemaService);
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
