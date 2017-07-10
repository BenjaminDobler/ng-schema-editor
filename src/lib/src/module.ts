import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NumberControlComponent} from "./component/number-control/number-control.component";
import {SchemaEditorComponent} from "./component/schema-editor.component";
import {KeyPipePipe} from "./component/key-pipe.pipe";
import {StringControlComponent} from "./component/string-control/string-control.component";
import {MaterialModule} from "@angular/material";


@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule
  ],
  declarations: [NumberControlComponent, SchemaEditorComponent, KeyPipePipe, StringControlComponent],
  exports: [SchemaEditorComponent]
})
export class LibModule { }
