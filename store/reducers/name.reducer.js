import { SET_NAME } from '../actions/name.action';

const INITIAL_STATE = {
  selectedName: null,
}

const NameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NAME:
        console.log(action.name);
      return {
        ...state,
        selectedName: action.name,
      }
    default:
      return state;
  }
}

export default NameReducer;