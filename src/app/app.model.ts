export interface EventDetails {
  address: string;
  description: string;
  discount: string;
  discount_price: number;
  event_date: string;
  event_start: string;
  lowest_price: string;
  place_name: string;
  short_name: string;
  thumbnail: string;
  ticket_count: string;
  title: string;
  url: string;
  venue_name: string;
  [prop: string]: any;
}

export interface Props {
  minPrice: number;
  maxPrice: number;
  minTime: number;
  maxTime: number;
}

export interface SliderValues {
  price: number;
  beforeTime: number;
  afterTime: number;
}
