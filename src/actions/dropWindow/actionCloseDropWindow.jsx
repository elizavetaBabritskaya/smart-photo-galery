import {SET_CLOSE_WINDOW} from './actionType'

const closeDropWindow = () => {
    return  (dispatch) => {
        console.log("closeModal")
        dispatch({type: SET_CLOSE_WINDOW, payload: false})
    }
}

export default closeDropWindow;

