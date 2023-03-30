import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import { PriceList } from './price-list';
import { PriceListState } from './state';

export interface ActionCart {
  type: 'SET_TIME' | 'SET_COUNTRY' | 'SET_TYPE';
  payload: string;
  priceList: PriceListState;
}

export interface ActionPriceList {
  type: 'INIT';
  payload: QuerySnapshot<DocumentData>;
}
