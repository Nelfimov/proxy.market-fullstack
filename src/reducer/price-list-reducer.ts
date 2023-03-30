import { ActionPriceList, PriceListState } from '../types';

export function priceListReducer(
  state: PriceListState,
  action: ActionPriceList
) {
  switch (action.type) {
    case 'SET_COUNTRY': {
      state.country = action.payload;
      return {
        ...state,
      };
    }
    case 'SET_TIME': {
      state.time = action.payload;
      return {
        ...state,
      };
    }
    case 'SET_TYPE': {
      state.type = action.payload;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
