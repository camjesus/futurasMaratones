import { ADD_ITEM, GET_ALL , DELTE_ITEM} from '../actions/item.action'
import Item from '../../models/Item'

const INITIAL_STATE = {
    items: []
}

const ItemsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
        case ADD_ITEM:
            const item = new Item(
                action.items.type,
                action.items.name,
                action.items.more,
            )
            return {
                ...state,
                items: state.items.concat(item),
            }
        case GET_ALL:
            return {
                ...state,
                items: action.items,
            }
        default:
            return state
    } 
}

export default ItemsReducer;