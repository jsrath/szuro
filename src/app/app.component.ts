import { Component, OnChanges } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges {
  prices: number[] = [];

  constructor(private eventService: EventService) {}

  ngOnChanges(): void {
    this.eventService.getEvents().subscribe((event: any) => {
      this.prices = event.events.filter(event => event.lowest_price);
      console.log(this.prices);
    });
  }

  filteredPrice: number;
  filteredTime: Date;

  updatePrice(price) {
    this.filteredPrice = price;
  }
  updateTime(time) {
    this.filteredTime = time;
  }
}
