import { Component, OnChanges, Input } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventDetails, ApiResponse, DistrictCheckBoxEvent } from '../../models/app.model';

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

  @Input()
  district: DistrictCheckBoxEvent;

  filteredEvents: EventDetails[];

  unchecked = [];



  ngOnChanges() {
    this.getData();
    this.events && this.applyFilters();
    this.sort && this.sortEvents();
    this.district && this.applyDistrictFilters();
  }

  applyFilters() {
    if (this.district) {
      this.applyDistrictFilters();
    }
    this.filteredEvents = this.events.filter(event => {
      let price = event.discount_price < this.price;
      let before = new Date(event.event_date).getHours() < this.beforeTime;
      let after = new Date(event.event_date).getHours() > this.afterTime;
      let checked = !this.unchecked.includes(event.address.slice(1, 3));
      if (this.unchecked) {
        return checked && price && before && after;
      } else {
        return price && before && after
      }
    })
  }

  applyDistrictFilters() {
    !this.district.checked
      ? this.unchecked.push(this.district.district)
      : this.unchecked = this.unchecked.filter(district => district !== this.district.district);
  }

  getData() {
    this.eventService.getEvents().subscribe((events: ApiResponse) => {
      this.events = events.events;
    });
  }

  sortEvents() {
    this.applyFilters();
    switch (this.sort) {
      case 'price':
        this.filteredEvents.sort((first, second) => first.discount_price - second.discount_price);
        break;
      case 'early':
        this.filteredEvents.sort((first, second) => this.formatEventTime(first.event_date) - this.formatEventTime(second.event_date));
        break;
      case 'late':
        this.filteredEvents.sort((first, second) => this.formatEventTime(second.event_date) - this.formatEventTime(first.event_date));
        break;
      default:
        break;
    }
  }

  formatEventTime(event: string) {
    return new Date(event).getHours()
  }
}
