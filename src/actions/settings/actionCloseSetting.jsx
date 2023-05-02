import {CLOSE_WINDOW} from './actionType'

const closeSetting = () => {
    return  (dispatch) => {
        console.log("closeModal")
        dispatch({type: CLOSE_WINDOW, payload: false})
    }
}

export default closeSetting;
