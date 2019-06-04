import products from '../../store/products.json';
import categories from '../../store/categories.json';

const initialState = {
  ...categories,
  ...products,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;