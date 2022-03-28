import { createStore, combineReducers, applyMiddleware } from 'redux';
import NameReducer from './reducers/name.reducer';
import ItemsReducer from './reducers/item.reducer'
import thunk from 'redux-thunk'


const RootReducer = combineReducers({
  name: NameReducer,
  items: ItemsReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))