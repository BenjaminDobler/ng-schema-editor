import { EventEmitter, OnInit } from '@angular/core';
export declare class StringControlComponent implements OnInit {
    data: any;
    collapsed: boolean;
    fields: Array<string>;
    formats: Array<string>;
    keyChanged: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onKeyChanged(newKey: string): void;
    addField(field: string): void;
}
