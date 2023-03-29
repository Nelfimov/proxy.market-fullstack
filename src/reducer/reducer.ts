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

function calculate(state: State) {
  return {
    total:
      (TIME_PRICE[state.time] ?? 1) *
      ((COUNTRY_PRICE[state.country] ?? 0) + (TYPE_PRICE[state.type] ?? 0)),
  };
}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_COUNTRY': {
      state.country = action.payload;

      return {
        ...state,
        ...calculate(state),
      };
    }
    case 'SET_TIME': {
      state.time = action.payload;

      return {
        ...state,
        ...calculate(state),
      };
    }
    case 'SET_TYPE': {
      state.type = action.payload;

      return {
        ...state,
        ...calculate(state),
      };
    }
    default:
      return state;
  }
}
