import { PriceList } from './price-list';

export interface CartState {
  country: string;
  type: string;
  time: string;
  total: number;
}

export interface PriceListState {
  [value: string]: PriceList;
  country: PriceList;
  time: PriceList;
  type: PriceList;
}
