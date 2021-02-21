import conformsTo from "lodash/conformsTo";
import isFunction from "lodash/isFunction";
import isObject from "lodash/isObject";
//import invariant from "invariant";

export default function checkStore(store) {
    const shape = {
        dispatch: isFunction,
        getState: isFunction,
        injectedReducer: isFunction,
        injectedSagas: isFunction,
    };
    // invariant(
    //     conformsTo(store, shape), '',
    // )
}