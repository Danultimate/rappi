const initialState = {
  filters: {
    sublevels: [],
    available: true,
    minPrice: null,
    maxPrice: null,
    minStock: null,
    maxStock: null,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SUBLEVEL':
      return {
        ...state,
        filters: {
          ...state.filters,
          sublevels: action.sublevels
        }
      };
    case 'SET_AVAILABILITY':
      return {
        ...state,
        filters: {
          ...state.filters,
          available: action.available,
        }
      };
    case 'SET_PRICES':
      return {
        ...state,
        filters: {
          ...state.filters,
          minPrice: action.minPrice,
          maxPrice: action.maxPrice,
        }
      };
    case 'SET_STOCKS':
      return {
        ...state,
        filters: {
          ...state.filters,
          minStock: action.minStock,
          maxStock: action.maxStock,
        }
      };
    default:
      return state;
  }
};

export default reducer;