import {SET_OPEN_WINDOW} from '../actions/dropWindow/actionType' ;
import {SET_CLOSE_WINDOW} from '../actions/dropWindow/actionType' ;

const initialState = {
  isDropOpen: false
};

export default function dropReducer(state = initialState, action) {
  console.log(state.isDropOpen)
  switch (action.type) {
    case SET_OPEN_WINDOW: {
      console.log("open");
      return {
        ...state, isDropOpen: action.payload
      }
    }

    case SET_CLOSE_WINDOW: {
      console.log("close");
      return {
        ...state, isDropOpen: action.payload
      }
    }

    default:
      return state
  }
}
