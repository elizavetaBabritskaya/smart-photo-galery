import {OPEN_CAROUSEL} from './actionType'

const openCarousel = () => {
    return  (dispatch) => {
        console.log("open carousel")
        dispatch({type: OPEN_CAROUSEL, payload: true})
    }
}

export default openCarousel;