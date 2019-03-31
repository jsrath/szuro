import { Component, OnChanges, Input } from '@angular/core';
import { EventService } from '../event.service';
import { EventDetails, ApiResponse } from '../app.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnChanges {
  constructor(private eventService: EventService) { }

  @Input()
  price: number;

  @Input()
  beforeTime: number;

  @Input()
  afterTime: number;

  @Input()
  events: EventDetails[];

  @Input()
  sort: string;

  filteredEvents: EventDetails[];



  ngOnChanges() {
    this.getData();
    this.events && this.applyFilters();
    this.sort && this.sortEvents();
  }

  applyFilters() {
    this.filteredEvents = this.events.filter(event => {
      let price = event.discount_price < this.price;
      let before = new Date(event.event_date).getHours() < this.beforeTime;
      let after = new Date(event.event_date).getHours() > this.afterTime;
      return price && before && after;
    })
  }

  getData() {
    this.eventService.getEvents().subscribe((events: ApiResponse) => {
      this.events = events.events;
    });
  }

  sortEvents() {
    this.filteredEvents.sort((first, second) => first[this.sort] - second[this.sort]);
  }
}
