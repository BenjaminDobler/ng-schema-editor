import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NumberControlComponent} from './component/number-control/number-control.component';
import {SchemaEditorComponent} from './component/schema-editor.component';
import {StringControlComponent} from './component/string-control/string-control.component';
import {MaterialModule} from '@angular/material';
import {BooleanControlComponent} from './component/boolean-control/boolean-control.component';
import {ObjectControlComponent} from './component/object-control/object-control.component';
import {SchemaEditorService} from './service/schema-editor.service';
import {ArrayControlComponent} from './component/array-control/array-control.component';


@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule
  ],
  declarations: [NumberControlComponent, SchemaEditorComponent, StringControlComponent, BooleanControlComponent, ObjectControlComponent, ArrayControlComponent],
  exports: [SchemaEditorComponent],
  providers: [SchemaEditorService]
})
export class LibModule {
}
