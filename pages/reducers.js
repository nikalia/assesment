import { combineReducers } from "redux-immutable";

import updateReducer from "../pages/posts/update/reducer";
import registerCust from "../pages/posts/register/reducer";

export default function createReducer(injectedReducers) {
    return combineReducers({
        updateCust: updateReducer,
        registerCust: registerReducer,
    })
}