import { DocumentData, QuerySnapshot } from 'firebase/firestore';

export interface ActionCart {
  type: 'SET_TIME' | 'SET_COUNTRY' | 'SET_TYPE';
  payload: string;
}

export interface ActionPriceList {
  type: 'INIT';
  payload: QuerySnapshot<DocumentData>;
}
