import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './databind/class-style/class-style.component';
import { EventbindComponent } from './databind/eventbind/eventbind.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
