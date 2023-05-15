import {
  ERROR_SEARCH_PHOTO,
  LOADING_SEARCH_PHOTO,
  GET_SEARCH_PHOTO,
} from "../actions/getSearchPhoto/actionType";

const initialState = {
  photos: [],
  loading: false,
};

export default function getPhotoReducer(state = initialState, action) {
  console.log();
  switch (action.type) {
    case GET_SEARCH_PHOTO: {
      console.log(action.payload);
      return {
        ...state,
        photos: action.payload,
        loading: false
      };
    }

    case LOADING_SEARCH_PHOTO: {
      console.log("loading");
      return {
        ...state,
        loading: true
      };
    }

    case ERROR_SEARCH_PHOTO: {
      console.log("error")
      return {
        ...state,
        loading: false,
        photo: []
      }

    }

    default:
      return state;
  }
}
