import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'boolean-control',
  templateUrl: './boolean-control.component.html',
  styleUrls: ['./boolean-control.component.css']
})
export class BooleanControlComponent implements OnInit {


  @Input()
  public data: any;

  collapsed: boolean = false;


  fields: Array<string> = ['enum', 'maxLength', 'minLength', 'description', 'format'];
  formats: Array<string> = ['date-time', 'email', 'hostname', 'ipv4', 'ipv6', 'uri', 'uri-reference', 'uri-template', 'json-pointer', 'uuid'];


  @Output()
  public keyChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public removeProperty: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
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