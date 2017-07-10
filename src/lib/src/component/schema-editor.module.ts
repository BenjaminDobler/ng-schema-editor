import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberControlComponent } from './number-control/number-control.component';
import {MaterialModule} from "@angular/material";
import {SchemaEditorComponent} from "./schema-editor.component";
import {KeyPipePipe} from "./key-pipe.pipe";
import { StringControlComponent } from './string-control/string-control.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule
  ],
  declarations: [NumberControlComponent, SchemaEditorComponent, KeyPipePipe, StringControlComponent],
  exports: [SchemaEditorComponent]
})
export class SchemaEditorModule { }
