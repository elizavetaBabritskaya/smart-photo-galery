import {OPEN_WINDOW} from '../actions/settings/actionType' ;
import {CLOSE_WINDOW} from '../actions/settings/actionType' ;

const initialState = {
  isOpen: false
};

export default function settingReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_WINDOW: {
      console.log("open");
      return {
        ...state, isOpen: action.payload
      }
    }

    case CLOSE_WINDOW: {
      console.log("close");
      return {
        ...state, isOpen: action.payload
      }
    }

    default:
      return state
  }
}