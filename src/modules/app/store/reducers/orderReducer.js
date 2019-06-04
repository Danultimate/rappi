const initialState = {
  priority: ['quantity']
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORDER':
      const index = state.priority.indexOf(action.order);

      if (index === -1) {
        return {
          ...state,
          priority: [action.order],
        }
      } else {
        return {
          ...state,
          priority: [],
        }
      }
    default:
      return state;
  }
}

export default orderReducer;