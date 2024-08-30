import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ImageEditorComponent } from './image-editor.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ImageEditorComponent }])],
  declarations: [ImageEditorComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ImageEditorModule {}
