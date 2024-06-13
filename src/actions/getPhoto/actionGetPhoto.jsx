import {
  ERROR_PHOTO,
  LOADING_PHOTO,
  GET_PHOTO,
} from "./actionType";

const hostUrl = "http://localhost:8080/files";

const getPhoto = () => {
  return async (dispatch) => {
    dispatch({type: LOADING_PHOTO});
    fetch(hostUrl, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => dispatch({type: GET_PHOTO, payload: data})).catch(dispatch({type: ERROR_PHOTO}));
      }
};

export default getPhoto;