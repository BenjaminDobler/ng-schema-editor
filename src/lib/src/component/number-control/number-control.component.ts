import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'number-control',
  templateUrl: './number-control.component.html',
  styleUrls: ['./number-control.component.css']
})
export class NumberControlComponent implements OnInit {


  @Input()
  public key:string;

  @Input()
  public data:any;


  constructor() { }

  ngOnInit() {
  }

}
