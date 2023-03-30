import { ActionCart, CartState, PriceListState } from '../types';

/*
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
*/

function calculate(cartState: CartState, priceListState: PriceListState) {
  return {
    total:
      (priceListState.time[cartState.time] ?? 1) *
      ((priceListState.country[cartState.country] ?? 0) +
        (priceListState.type[cartState.type] ?? 0)),
  };
}

export function cartReducer(state: CartState, action: ActionCart) {
  switch (action.type) {
    case 'SET_COUNTRY': {
      state.country = action.payload;

      return {
        ...state,
        ...calculate(state, action.priceList),
      };
    }
    case 'SET_TIME': {
      state.time = action.payload;

      return {
        ...state,
        ...calculate(state, action.priceList),
      };
    }
    case 'SET_TYPE': {
      state.type = action.payload;

      return {
        ...state,
        ...calculate(state, action.priceList),
      };
    }
    default:
      return state;
  }
}
