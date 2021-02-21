import {
    DEFAULT_ACTION
} from './constant';

export function defaultAction() {
    return {
        type: DEFAULT_ACTION
    }
}

export function fetchDataAction(requestInfo) {
    return {
        type: FETCH_ACTION,
        requestInfo: requestInfo
    }
}

export function fetchDataSuccessAction() {
    return {
        type: FETCH_SUCCESS_ACTION,
    }
}

export function fetchDataFailedAction() {
    return {
        type: FETCH_FAILED_ACTION,
    }
}