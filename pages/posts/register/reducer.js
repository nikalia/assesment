import {
    DEFAULT_ACTION,
    FETCH_ACTION,
    FETCH_SUCCESS_ACTION,
    FETCH_FAILED_ACTION
} from './constant'

export const initialState = fromJS({
    dataDetails
})

function registerReducer(state = initialState, action) {
    switch (action.type) {
        case DEFAULT_ACTION:
            return state;
        case FETCH_ACTION:
            return state;
        case FETCH_SUCCESS_ACTION:
            if (action.requestInfo.serviceInfo.propNameToUpdate == '')
            return state;
        case FETCH_FAILED_ACTION:
            return state;
        default: 
            return state;
    }
}

export default registerReducer;