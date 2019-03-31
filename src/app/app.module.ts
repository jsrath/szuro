import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainComponent } from './components/main/main.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { EventsComponent } from './components/events/events.component';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [MainComponent, ControlPanelComponent, EventsComponent],
  imports: [BrowserAnimationsModule, BrowserModule, HttpClientModule, MaterialModule],
  providers: [EventService],
  bootstrap: [MainComponent],
})
export class AppModule { }
