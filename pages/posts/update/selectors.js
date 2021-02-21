import {createSelector} from 'reselect'
import { initialState } from "./reducer";

const selectUserDomain = state = state.get('dataDetails', initialState);

const makeSelectCustDetails = () => createSelector(selectUserDomain, substate => substate.toJS());

export default makeSelectCustDetails;
export {selectUserDomain}