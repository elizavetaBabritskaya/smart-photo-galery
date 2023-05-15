import {
  ERROR_SEARCH_PHOTO,
  LOADING_SEARCH_PHOTO,
  GET_SEARCH_PHOTO,
} from "./actionType";

const hostUrl = `http://localhost:8000/search=${localStorage.getItem("input_text")}`;

const getSearchPhoto = () => {
  return async (dispatch) => {
    dispatch({type: LOADING_SEARCH_PHOTO});
    fetch(hostUrl, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => dispatch({type: GET_SEARCH_PHOTO, payload: data})).catch(dispatch({type: ERROR_SEARCH_PHOTO}));
      }
};

export default getSearchPhoto;