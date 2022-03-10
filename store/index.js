import { createStore, combineReducers } from 'redux';
import NameReducer from './reducers/name.reducer';

const RootReducer = combineReducers({
  name: NameReducer,
})

export default createStore(RootReducer);