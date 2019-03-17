import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { EventsComponent } from './events/events.component';
import { EventService } from './event.service';

@NgModule({
  declarations: [AppComponent, ControlPanelComponent, EventsComponent],
  imports: [BrowserAnimationsModule, BrowserModule, HttpClientModule, MaterialModule],
  providers: [EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
