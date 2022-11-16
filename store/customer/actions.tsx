import {createAction} from "typesafe-actions";

export const getCustomerList = createAction('GET_CUSTOMERS', resolve => {
    return (customerList: object) => resolve(customerList);
});