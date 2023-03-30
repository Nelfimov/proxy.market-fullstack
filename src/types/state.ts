import { PriceList } from './price-list';

export interface CartState {
  country: string;
  type: string;
  time: string;
  total: number;
}

export interface PriceListState {
  country: PriceList;
  time: PriceList;
  type: PriceList;
}
