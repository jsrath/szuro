import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Props, SliderValues } from '../../models/app.model'

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnChanges {
  constructor() { }

  selectedSort: string;

  @Input()
	props: Props | undefined;

	@Input()
	districts: [];

  @Output()
  filteredValues: EventEmitter<SliderValues> = new EventEmitter();

  @Output()
  eventSortBy: EventEmitter<String> = new EventEmitter();


  sliderValues: SliderValues = {
    price: undefined,
    beforeTime: undefined,
    afterTime: undefined,
  };

  ngOnChanges() {
    if (this.props) {
      this.updatePrice(this.props.maxPrice);
      this.updateAfterTime(this.props.minTime);
      this.updateBeforeTime(this.props.maxTime);
    }
  }

  updatePrice(price: number) {
    this.sliderValues.price = price;
    this.filteredValues.emit(this.sliderValues);
  }

  updateBeforeTime(time: number) {
    this.sliderValues.beforeTime = time;
    this.filteredValues.emit(this.sliderValues);
  }

  updateAfterTime(time: number) {
    this.sliderValues.afterTime = time;
    this.filteredValues.emit(this.sliderValues);
  }
  updateSort() {
    this.eventSortBy.emit(this.selectedSort)
  }
}
