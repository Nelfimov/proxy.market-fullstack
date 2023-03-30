import { ActionPriceList, PriceListState } from '../types';

export function priceListReducer(
  state: PriceListState,
  action: ActionPriceList
) {
  switch (action.type) {
    case 'INIT': {
      action.payload.forEach((doc) => {
        state[doc.id] = doc.data();
      });
      return { ...state };
    }
    default:
      return state;
  }
}
