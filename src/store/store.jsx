import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const initialState = {
  isDropOpen: false,
  isOpen: false,
  carouselIsOpen: false,
  photos:[]
}

const store = createStore(rootReducer, initialState ,applyMiddleware(thunk));


export default store;
