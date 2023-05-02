import {OPEN_WINDOW} from './actionType'

const openSetting = () => {
    return  (dispatch) => {
        console.log("showModal")
        dispatch({type: OPEN_WINDOW, payload: true})
    }
}

export default openSetting;