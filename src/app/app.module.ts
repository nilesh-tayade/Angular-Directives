import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { StyleDemoComponent } from './style-demo/style-demo.component';
import { ClassDemoComponent } from './class-demo/class-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    IfDemoComponent,
    SwitchDemoComponent,
    ForDemoComponent,
    StyleDemoComponent,
    ClassDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
