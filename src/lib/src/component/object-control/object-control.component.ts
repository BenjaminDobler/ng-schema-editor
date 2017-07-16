import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {BaseControl} from '../base-control/base-control.component';
import {SchemaEditorService} from '../../service/schema-editor.service';

@Component({
  selector: 'object-control',
  templateUrl: './object-control.component.html',
  styleUrls: ['./object-control.component.css']
})
export class ObjectControlComponent extends BaseControl {


  public controlTypes: Array<string> = ['string', 'number', 'array', 'boolean', 'object'];
  public fields:Array<string> = ['required', 'description'];
  public props: Array<any> = [];


  @Input()
  public root = false;


  constructor(public schemaService: SchemaEditorService) {
    super(schemaService);
  }



  updateProps() {
    this.props = [];
    for (let i in this.data.data.properties) {
      if (this.data.data.properties.hasOwnProperty(i)) {
        this.props.push({
          key: i,
          data: this.data.data.properties[i]
        });
      }
    }
  }


  onDataChanged() {
    this.updateProps();
  }


  public addProperty(type: string) {
    if (type === 'string') {
      this.data.data.properties.untitled = {
        type: 'string',
        description: 'tbd'
      };
    } else if (type === 'boolean') {
      this.data.data.properties.untitled = {
        type: 'boolean',
        description: 'tbd'
      };
    } else if (type === 'object') {
      this.data.data.properties.untitled = {
        type: 'object',
        description: 'tbd',
        properties: {}
      };
    } else if (type === 'number') {
      this.data.data.properties.untitled = {
        type: 'number'
      };
    }
    this.updateProps();
  }

  onKeyChanged(data?: any) {
    if (data) {
      this.data.key = data;
      this.keyChanged.emit();
    } else {
      let newSchema: any = Object.assign({}, this.data.data);
      let newProperties = {};
      this.props.forEach((p) => {
        newProperties[p.key] = p.data;
      });
      newSchema.properties = newProperties;
      this.data.data = newSchema;
      this.keyChanged.emit();
    }
  }

  onRemoveProperty(data: any) {
    let i: number = this.props.indexOf(data);
    this.props.splice(i, 1);
    this.onKeyChanged();
  }

  getUnrequiredProperties() {
    let keys:Array<string> = [];
    this.props.forEach((p) => {
      if (this.data.data.hasOwnProperty('required') && this.data.data.required.indexOf(p.key)===-1) {
        keys.push(p.key);
      }
    });
    return keys;
  }




}
