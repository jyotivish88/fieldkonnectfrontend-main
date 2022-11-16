// import { combineReducers } from "redux";

// // Import all reducers
// import customerReducer from "./customer/reducer";

// const reducers = combineReducers({
//     customers: customerReducer
// })

// export default reducers;
import {combineReducers} from "redux";
import {customersReducer} from "./customer/reducers";
import { authUserReducer } from "./login/reducers"
import {usersReducer} from "./user/reducers";

import ICustomerState from "./customer/index";
import IAuthUserInfoState from "./login/index"
import IUserState from "./user/index";

export interface IStoreState {
    customers: ICustomerState;
    authUserInfo : IAuthUserInfoState;
    users: IUserState;
}

export const reducers = combineReducers( {
   customers: customersReducer,
   authUserInfo: authUserReducer,
   users: usersReducer,
});