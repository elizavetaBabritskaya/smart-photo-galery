import {
  ERROR_PHOTO,
  LOADING_PHOTO,
  GET_PHOTO,
} from "../actions/getPhoto/actionType";

const initialState = {
  photos: [],
  loading: false,
};

export default function getPhotoReducer(state = initialState, action) {
  console.log();
  switch (action.type) {
    case GET_PHOTO: {
      console.log("get photo");
      return {
        ...state,
        photos: action.payload,
        loading: false
      };
    }

    case LOADING_PHOTO: {
      console.log("loading");
      return {
        ...state,
        loading: true
      };
    }

    case ERROR_PHOTO: {
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
