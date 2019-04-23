import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventDetails, Props, SliderValues } from '../../models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  events: EventDetails;
  filteredPrice: number;
  filteredBeforeTime: number;
  filteredAfterTime: number;
  sortBy: string;
  props: Props;
  districts: [];
  uniqueDistricts: any;
  checkedDistrict: object;

  private minPrice: number;
  private maxPrice: number;
  private minTime: number;
  private maxTime: number;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((event: any) => {
      if (!event.events.length) {
        return;
      }
      this.events = event.events;
      this.districts = event.events.map(event => this.formatAsOrdinal(event.address.slice(1, 3)));
      this.uniqueDistricts = [...new Set(this.districts)].filter(Boolean);
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

  updateChecked(district) {
    this.checkedDistrict = district;
  }

  sortEvents(sortType) {
    this.sortBy = sortType;
  }

  formatAsOrdinal(number) {
    if (isNaN(number)) {
      return;
    }
    const suffix = ["th", "st", "nd", "rd"];
    const remainder = number % 100;
    return `${parseInt(number, 10)}${suffix[(remainder - 20) % 10] || suffix[remainder] || suffix[0]}`;
  }
}
