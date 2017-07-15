import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'object-control',
  templateUrl: './object-control.component.html',
  styleUrls: ['./object-control.component.css']
})
export class ObjectControlComponent implements OnInit {


  @Output()
  public keyChanged: EventEmitter<any> = new EventEmitter<any>();

  public controlTypes: Array<string> = ['string', 'number', 'array', 'boolean', 'object'];
  public props: Array<any> = [];

  get data(): any {
    return this._data;
  }

  @Input()
  set data(value: any) {
    this._data = value;
    this.updateProps();
    console.log(this.props);
  }


  private _data: any;

  @Input()
  public root = false;

  updateProps() {
    this.props = [];
    for (var i in this.data.data.properties) {
      this.props.push({
        key: i,
        data: this.data.data.properties[i]
      });
    }
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
    }
    this.updateProps();
  }

  onKeyChanged(data?:any) {
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


}
