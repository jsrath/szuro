import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
  constructor() {}
  @Output()
  filteredPrice: EventEmitter<any> = new EventEmitter();
  @Output()
  filteredTime: EventEmitter<any> = new EventEmitter();

  price = 10000;
  time = new Date().getHours();

  ngOnInit() {}

  updatePrice(price) {
    this.price = price;
    this.filteredPrice.emit(this.price);
  }
  updateTime(time) {
    this.time = time;
    this.filteredTime.emit(this.time);
  }
}
