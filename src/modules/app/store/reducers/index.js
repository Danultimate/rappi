import { combineReducers } from 'redux';
import reducer from './reducer';
import filterReducer from './filterReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  reducer,
  filterReducer,
  orderReducer,
});