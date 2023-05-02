import {CLOSE_CAROUSEL} from './actionType'

const closeCarousel = () => {
    return  (dispatch) => {
        console.log("close carousel")
        dispatch({type: CLOSE_CAROUSEL, payload: false})
    }
}

export default closeCarousel;