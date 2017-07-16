import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SchemaEditorService} from '../../service/schema-editor.service';
import {BaseControl} from '../base-control/base-control.component';

@Component({
  selector: 'string-control',
  templateUrl: './string-control.component.html',
  styleUrls: ['./string-control.component.css']
})
export class StringControlComponent extends BaseControl {


  fields: Array<string> = ['enum', 'maxLength', 'minLength', 'description', 'format'];
  formats: Array<string> = ['date-time', 'email', 'hostname', 'ipv4', 'ipv6', 'uri', 'uri-reference', 'uri-template', 'json-pointer', 'uuid'];


  fieldTypes:any = {
    maxLength: {
      type: 'number',
      componentType: 'simple'
    },
    minLength: {
      type: 'number',
      componentType: 'simple'
    },
    description: {
      type: 'string',
      componentType: 'simple'
    }
  };



  constructor(public schemaService: SchemaEditorService) {
    super(schemaService);
  }

  onKeyChanged(newKey: string) {
    this.data.key = newKey;
    this.keyChanged.emit();

  }



}
