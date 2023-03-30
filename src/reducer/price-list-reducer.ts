interface PriceListState {
  country: {
    [name: string]: number;
  };
  time: {
    [name: string]: number;
  };
  type: {
    [name: string]: number;
  };
}

interface PriceListAction {
  type: 'INIT' | 'SET_TIME' | 'SET_COUNTRY' | 'SET_TYPE';
  payload: { [name: string]: number };
}

export function priceListReducer(
  state: PriceListState,
  action: PriceListAction
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
