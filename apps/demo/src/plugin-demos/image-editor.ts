import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedImageEditor } from '@demo/shared';
import {} from '@plugin-seed/image-editor';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedImageEditor {}
