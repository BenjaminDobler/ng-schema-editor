import {Component, Input} from '@angular/core';
import {BaseControl} from '../base-control/base-control.component';
import {SchemaEditorService} from '../../service/schema-editor.service';

@Component({
  selector: 'number-control',
  templateUrl: './number-control.component.html',
  styleUrls: ['./number-control.component.css']
})
export class NumberControlComponent extends BaseControl {


  @Input()
  public key: string;

  @Input()
  public data: any;


  constructor(public schemaService: SchemaEditorService) {
    super(schemaService);
  }


}
