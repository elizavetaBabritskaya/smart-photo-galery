import {SET_OPEN_WINDOW} from './actionType'

const openDropWindow = () => {
    return  (dispatch) => {
        console.log("showModal")
        dispatch({type: SET_OPEN_WINDOW, payload: true})
    }
}

export default openDropWindow;
