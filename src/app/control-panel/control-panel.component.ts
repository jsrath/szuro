import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Props, SliderValues } from '../app.model';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnChanges {
  constructor() {}

  @Input()
  props: Props | undefined;

  @Output()
  filteredValues: EventEmitter<any> = new EventEmitter();

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

  updatePrice(price) {
    this.sliderValues.price = price;
    this.filteredValues.emit(this.sliderValues);
  }

  updateBeforeTime(time) {
    this.sliderValues.beforeTime = time;
    this.filteredValues.emit(this.sliderValues);
    console.log(this.sliderValues);
  }

  updateAfterTime(time) {
    this.sliderValues.afterTime = time;
    this.filteredValues.emit(this.sliderValues);
  }
}
