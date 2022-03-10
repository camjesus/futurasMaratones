import { SET_NAME } from '../actions/name.action';
import { SELECTED_NAME } from '../actions/name.action';

const INITIAL_STATE = {
  name: null,
}

const NameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NAME:
      const newName = state.name
      if (newName !== null) return state;

      return {
        ...state,
        name: newName,
      }
      case SELECTED_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
}

export default NameReducer;