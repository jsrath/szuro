import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit, OnChanges {
  constructor(private eventService: EventService) {}

  @Input()
  price = 10000;

  @Input()
  time = new Date().getHours();

  events: any;

  ngOnInit() {
    this.getData();
  }
  ngOnChanges() {
    console.log(this.events);
    console.log(this.price);
  }

  applyFilters(event) {
    if (event.discount_price < this.price && new Date(event.event_date).getHours() > this.time) {
      return true;
    }
  }

  getData() {
    this.eventService.getEvents().subscribe((myEvents: any) => {
      this.events = myEvents.events;
    });
  }
}
