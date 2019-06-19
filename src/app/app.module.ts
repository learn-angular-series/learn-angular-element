import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [PanelComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const commonPanel = createCustomElement(PanelComponent, { injector });
    customElements.define('common-panel', commonPanel);
  }

  ngDoBootstrap() {}
}
