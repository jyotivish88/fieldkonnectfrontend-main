import {AnyAction} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import ICustomerState from "./index";
const initialState: ICustomerState = {
    customerList: []
};
export function customersReducer(state: ICustomerState = initialState, action: AnyAction): ICustomerState {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {...state};
        case 'GET_CUSTOMERS':
            return {...state, customerList : action.payload};
        default:
            return state;
    }
}