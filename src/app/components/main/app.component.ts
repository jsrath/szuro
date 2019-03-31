import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventDetails, Props, SliderValues } from '../../models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  minPrice: number;
  maxPrice: number;
  minTime: number;
  maxTime: number;
  events: EventDetails;
  filteredPrice: number;
  filteredBeforeTime: number;
  filteredAfterTime: number;
  sortBy: string;
  props: Props;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((event: any) => {
      this.events = event.events;
      this.minPrice = Math.floor(Math.min(...event.events.map(event => Number(event.discount_price))) / 1000) * 1000;
      this.maxPrice = Math.ceil(Math.max(...event.events.map(event => Number(event.discount_price))) / 1000) * 1000;
      this.minTime = Math.min(...event.events.map(event => new Date(event.event_date).getHours())) - 1;
      this.maxTime = Math.max(...event.events.map(event => new Date(event.event_date).getHours())) + 1;
      this.props = {
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
        minTime: this.minTime,
        maxTime: this.maxTime,
      };
    });
  }

  updateValues(values: SliderValues) {
    this.filteredPrice = Object.is(values.price, undefined) ? this.filteredPrice : values.price;
    this.filteredBeforeTime = values.beforeTime;
    this.filteredAfterTime = values.afterTime;
  }

  sortEvents(sortType) {
    this.sortBy = sortType;
  }
}
