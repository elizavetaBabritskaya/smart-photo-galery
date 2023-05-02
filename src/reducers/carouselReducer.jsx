import {OPEN_CAROUSEL} from '../actions/carousel/actionType' ;
import {CLOSE_CAROUSEL} from '../actions/carousel/actionType' ;

const initialState = {
  carouselIsOpen: false
};

export default function carouselReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CAROUSEL: {
      console.log("open");
      return {
        ...state, carouselIsOpen: action.payload
      }
    }

    case CLOSE_CAROUSEL: {
      console.log("close");
      return {
        ...state, carouselIsOpen: action.payload
      }
    }

    default:
      return state
  }
}