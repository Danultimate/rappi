export const set_sublevel = (sublevels) => {
  return {
    type: 'SET_SUBLEVEL',
    sublevels,
  }
};

export const set_availability = (available) => {
  return {
    type: 'SET_AVAILABILITY',
    available,
  }
};

export const set_prices = (minPrice, maxPrice) => {
  return {
    type: 'SET_PRICES',
    minPrice, maxPrice
  }
};

export const set_stocks = (minStock, maxStock) => {
  return {
    type: 'SET_STOCKS',
    minStock, maxStock
  }
};

export const set_order = (order) => {
  return {
    type: 'SET_ORDER',
    order
  }
};