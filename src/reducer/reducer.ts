import { Action, PriceList, State } from '../types';

const TYPE_PRICE: PriceList = {
  s4i: 60.0,
  s4s: 19.8,
  s6i: 0.51,
};

const TIME_PRICE: PriceList = {
  '1d': 1,
  '7d': 7,
  '1m': 30,
};

const COUNTRY_PRICE: PriceList = {
  AU: 236.0,
  AT: 236.0,
};

function calculate() {}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_COUNTRY': {
      return {
        ...state,
        country: action.payload,
      };
    }
    case 'SET_TIME': {
      return {
        ...state,
        time: action.payload,
      };
    }
    case 'SET_TYPE': {
      return {
        ...state,
        type: action.payload,
      };
    }
  }
  throw Error('Unknown action type: ' + action.type);
}
