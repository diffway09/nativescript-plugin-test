import { Component, NgZone } from '@angular/core';
import { DemoSharedImageEditor } from '@demo/shared';
import {} from '@plugin-seed/image-editor';

@Component({
  selector: 'demo-image-editor',
  templateUrl: 'image-editor.component.html',
})
export class ImageEditorComponent {
  demoShared: DemoSharedImageEditor;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedImageEditor();
  }
}
