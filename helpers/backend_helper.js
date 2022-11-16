import { post, del, get, put, patch } from "./api_helper"
import * as url from "./url_helper"

/*========== Auth Module ===============*/
// Login Method
export const backendPostAuthLogin = (data) => post(url.POST_AUTH_LOGIN, data)
// Check User Mobile 
export const backendPostAuthMobileExists = (data) => post(url.POST_AUTH_MOBILEEXISTS, data)
// Check User Email 
export const backendPostAuthEmailExists = (data) => post(url.POST_AUTH_EMAILEXISTS, data)
// Forgot Password 
export const backendPostAuthForgotPassword = (data) => post(url.POST_AUTH_FORGOTPASSWORD, data)
// Change Password 
export const backendPostAuthChangePassword = (data) => post(url.POST_AUTH_CHANGEPASSWORD, data)
// Reset Password 
export const backendPostAuthResetPassword = (data) => post(url.POST_AUTH_RESETPASSWORD, data)
// New Otp Request 
export const backendPostAuthNewOtpRequest = (data) => post(url.POST_AUTH_NEWOTPREQUEST, data)
// Resend Otp Request 
export const backendPostAuthResendOtpRequest = (data) => post(url.POST_AUTH_RESENDOTPREQUEST, data)
/*========== Users Module ===============*/
// Get all Users
export const backendGetAllUsers = () => get(url.MODULE_USERS)
// Add New User
export const backendPostAddNewUser = data => post(url.MODULE_USERS, data)
// Update User
export const backendPatchUpdateUser = (id, data) => patch(`${url.MODULE_USERS}/${id}`, data)
// Get User Info
export const backendGetUserInfo = (id) => get(`${url.MODULE_USERS}/${id}`)
//Delete User
export const backendDeleteUser = (id) => del(`${url.MODULE_USERS}/${id}`)
// Status Update User
export const backendPostUserStatus = data => post(url.POST_USER_STATUS, data)
/*========== Customer Module ===============*/
// Get all Customers
export const backendGetAllCustomers = () => get(url.MODULE_CUSTOMER)
// Add New Customer
export const backendPostAddNewCustomer = data => post(url.MODULE_CUSTOMER, data)
// Update Customer
export const backendPatchUpdateCustomer = (id, data) => patch(`${url.MODULE_CUSTOMER}/${id}`, data)
// Get Customer Info
export const backendGetCustomerInfo = (id) => get(`${url.MODULE_CUSTOMER}/${id}`)
//Delete Customer
export const backendDeleteCustomer = (id) => del(`${url.MODULE_CUSTOMER}/${id}`)
// Status Update Customer
export const backendPostCustomerStatus = data => post(url.POST_CUSTOMER_STATUS, data)
/*========== Beat Module ===============*/
// Get all Beats
export const backendGetAllBeats = () => get(url.MODULE_BEAT)
// Add New Beat
export const backendPostAddNewBeat = data => post(url.MODULE_BEAT, data)
// Update Beat
export const backendPatchUpdateBeat = (id, data) => patch(`${url.MODULE_BEAT}/${id}`, data)
// Get Beat Info
export const backendGetBeatInfo = (id) => get(`${url.MODULE_BEAT}/${id}`)
//Delete Beat
export const backendDeleteBeat = (id) => del(`${url.MODULE_BEAT}/${id}`)
// Status Update Beat
export const backendPostBeatStatus = data => post(url.POST_BEAT_STATUS, data)
/*========== BeatSchedule Module ===============*/
// Get all BeatSchedules
export const backendGetAllBeatSchedules = () => get(url.MODULE_BEATSCHEDULES)
// Add New BeatSchedule
export const backendPostAddNewBeatSchedule = data => post(url.MODULE_BEATSCHEDULES, data)
// Update BeatSchedule
export const backendPatchUpdateBeatSchedule = (id, data) => patch(`${url.MODULE_BEATSCHEDULES}/${id}`, data)
// Get BeatSchedule Info
export const backendGetBeatScheduleInfo = (id) => get(`${url.MODULE_BEATSCHEDULES}/${id}`)
//Delete BeatSchedule
export const backendDeleteBeatSchedule = (id) => del(`${url.MODULE_BEATSCHEDULES}/${id}`)
// Status Update BeatSchedule
export const backendPostBeatScheduleStatus = data => post(url.POST_BEATSCHEDULES_STATUS, data)
/*========== Category Module ===============*/
// Get all Categories
export const backendGetAllCategories = () => get(url.MODULE_CATEGORY)
// Add New Category
export const backendPostAddNewCategory = data => post(url.MODULE_CATEGORY, data)
// Update Category
export const backendPatchUpdateCategory = (id, data) => patch(`${url.MODULE_CATEGORY}/${id}`, data)
// Get Category Info
export const backendGetCategoryInfo = (id) => get(`${url.MODULE_CATEGORY}/${id}`)
//Delete Category
export const backendDeleteCategory = (id) => del(`${url.MODULE_CATEGORY}/${id}`)
// Status Update Category
export const backendPostCategoryStatus = data => post(url.POST_CATEGORY_STATUS, data)
/*========== SubCategory Module ===============*/
// Get all Categories
export const backendGetAllSubCategories = () => get(url.MODULE_SUBCATEGORY)
// Add New Category
export const backendPostAddNewSubCategory = data => post(url.MODULE_SUBCATEGORY, data)
// Update Category
export const backendPatchUpdateSubCategory = (id, data) => patch(`${url.MODULE_SUBCATEGORY}/${id}`, data)
// Get Category Info
export const backendGetSubCategoryInfo = (id) => get(`${url.MODULE_SUBCATEGORY}/${id}`)
//Delete Category
export const backendDeleteSubCategory = (id) => del(`${url.MODULE_SUBCATEGORY}/${id}`)
// Status Update Category
export const backendPostSubCategoryStatus = data => post(url.POST_SUBCATEGORY_STATUS, data)
/*========== Products Module ===============*/
// Get all Products
export const backendGetAllProducts = () => get(url.MODULE_PRODUCT)
// Add New Product
export const backendPostAddNewProduct = data => post(url.MODULE_PRODUCT, data)
// Update Product
export const backendPatchUpdateProduct = (id, data) => patch(`${url.MODULE_PRODUCT}/${id}`, data)
// Get Product Info
export const backendGetProductInfo = (id) => get(`${url.MODULE_PRODUCT}/${id}`)
//Delete Product
export const backendDeleteProduct = (id) => del(`${url.MODULE_PRODUCT}/${id}`)
// Status Update Product
export const backendPostProductStatus = data => post(url.POST_PRODUCT_STATUS, data)
/*========== Country Module ===============*/
// Get all Country
export const backendGetAllCountries = () => get(url.MODULE_COUNTRY)
// Get all Country
export const backendGetAllCountryCodes = (data) => post(url.GET_COUNTRY_CODES, data)
// Add New Country
export const backendPostAddNewCountry = data => post(url.MODULE_COUNTRY, data)
// Update Country
export const backendPatchUpdateCountry = (id, data) => patch(`${url.MODULE_COUNTRY}/${id}`, data)
// Get Country Info
export const backendGetCountryInfo = (id) => get(`${url.MODULE_COUNTRY}/${id}`)
//Delete Country
export const backendDeleteCountry = (id) => del(`${url.MODULE_COUNTRY}/${id}`)
// Status Update Country
export const backendPostCountryStatus = data => post(url.POST_COUNTRY_STATUS, data)
/*========== State Module ===============*/
// Get all States
export const backendGetAllStates = () => get(url.MODULE_STATES)
// Add New State
export const backendPostAddNewState = data => post(url.MODULE_STATES, data)
// Update State
export const backendPatchUpdateState = (id, data) => patch(`${url.MODULE_STATES}/${id}`, data)
// Get State Info
export const backendGetStateInfo = (id) => get(`${url.MODULE_STATES}/${id}`)
//Delete State
export const backendDeleteState = (id) => del(`${url.MODULE_STATES}/${id}`)
// Status Update State
export const backendPostStateStatus = data => post(url.POST_STATES_STATUS, data)
/*========== City Module ===============*/
// Get all Cities
export const backendGetAllCities = () => get(url.MODULE_CITY)
// Add New City
export const backendPostAddNewCity = data => post(url.MODULE_CITY, data)
// Update City
export const backendPatchUpdateCity = (id, data) => patch(`${url.MODULE_CITY}/${id}`, data)
// Get City Info
export const backendGetCityInfo = (id) => get(`${url.MODULE_CITY}/${id}`)
//Delete City
export const backendDeleteCity = (id) => del(`${url.MODULE_CITY}/${id}`)
// Status Update City
export const backendPostCityStatus = data => post(url.POST_CITY_STATUS, data)
/*========== Attendance Module ===============*/
// Get all Attendances
export const backendGetAllAttendances = () => get(url.MODULE_ATTENDANCE)
// Add New Attendance
export const backendPostAddNewAttendance = data => post(url.MODULE_ATTENDANCE, data)
// Update Attendance
export const backendPatchUpdateAttendance = (id, data) => patch(`${url.MODULE_ATTENDANCE}/${id}`, data)
// Get Attendance Info
export const backendGetAttendanceInfo = (id) => get(`${url.MODULE_ATTENDANCE}/${id}`)
//Delete Attendance
export const backendDeleteAttendance = (id) => del(`${url.MODULE_ATTENDANCE}/${id}`)
// Status Update Attendance
export const backendPostAttendanceStatus = data => post(url.POST_ATTENDANCE_STATUS, data)
/*========== CustomerVisit Module ===============*/
// Get all CustomerVisits
export const backendGetAllCustomerVisit = () => get(url.MODULE_CUSTOMERVISIT)
// Add New CustomerVisit
export const backendPostAddNewCustomerVisit = data => post(url.MODULE_CUSTOMERVISIT, data)
// Update CustomerVisit
export const backendPatchUpdateCustomerVisit = (id, data) => patch(`${url.MODULE_CUSTOMERVISIT}/${id}`, data)
// Get CustomerVisit Info
export const backendGetCustomerVisitInfo = (id) => get(`${url.MODULE_CUSTOMERVISIT}/${id}`)
//Delete CustomerVisit
export const backendDeleteCustomerVisit = (id) => del(`${url.MODULE_CUSTOMERVISIT}/${id}`)
// Status Update CustomerVisit
export const backendPostCustomerVisitStatus = data => post(url.POST_CUSTOMERVISIT_STATUS, data)
/*========== Loyalty Scheme Module ===============*/
// Get all LoyaltySchemes
export const backendGetAllLoyaltySchemes = () => get(url.MODULE_LOYALTYSCHEME)
// Add New LoyaltyScheme
export const backendPostAddNewLoyaltyScheme = data => post(url.MODULE_LOYALTYSCHEME, data)
// Update LoyaltyScheme
export const backendPatchUpdateLoyaltyScheme = (id, data) => patch(`${url.MODULE_LOYALTYSCHEME}/${id}`, data)
// Get LoyaltyScheme Info
export const backendGetLoyaltySchemeInfo = (id) => get(`${url.MODULE_LOYALTYSCHEME}/${id}`)
//Delete LoyaltyScheme
export const backendDeleteLoyaltyScheme = (id) => del(`${url.MODULE_LOYALTYSCHEME}/${id}`)
// Status Update LoyaltyScheme
export const backendPostLoyaltySchemeStatus = data => post(url.POST_LOYALTYSCHEME_STATUS, data)
/*========== Notification Module ===============*/
// Get all Notifications
export const backendGetAllNotifications = () => get(url.MODULE_NOTIFICATION)
// Add New Notification
export const backendPostAddNewNotification = data => post(url.MODULE_NOTIFICATION, data)
// Update Notification
export const backendPatchUpdateNotification = (id, data) => patch(`${url.MODULE_NOTIFICATION}/${id}`, data)
// Get Notification Info
export const backendGetNotificationInfo = (id) => get(`${url.MODULE_NOTIFICATION}/${id}`)
//Delete Notification
export const backendDeleteNotification = (id) => del(`${url.MODULE_NOTIFICATION}/${id}`)
// Status Update Notification
export const backendPostNotificationStatus = data => post(url.POST_NOTIFICATION_STATUS, data)
/*========== Shopping Carts Module ===============*/
// Get all Shopping Carts
export const backendGetAllShoppingCarts = () => get(url.MODULE_SHOPPINGCART)
// Add New ShoppingCart
export const backendPostAddNewShoppingCart = data => post(url.MODULE_SHOPPINGCART, data)
// Update Notification
export const backendPatchUpdateShoppingCart = (id, data) => patch(`${url.MODULE_SHOPPINGCART}/${id}`, data)
// Get Notification Info
export const backendGetShoppingCartInfo = (id) => get(`${url.MODULE_SHOPPINGCART}/${id}`)
//Delete Notification
export const backendDeleteShoppingCart = (id) => del(`${url.MODULE_SHOPPINGCART}/${id}`)
// Status Update Notification
export const backendPostShoppingCartStatus = data => post(url.POST_SHOPPINGCART_STATUS, data)
/*========== Orders Module ===============*/
// Get all Orders
export const backendGetAllOrders = () => get(url.MODULE_ORDER)
// Add New Order
export const backendPostAddNewOrder = data => post(url.MODULE_ORDER, data)
// Update Order
export const backendPatchUpdateOrder = (id, data) => patch(`${url.MODULE_ORDER}/${id}`, data)
// Get Order Info
export const backendGetOrderInfo = (id) => get(`${url.MODULE_ORDER}/${id}`)
//Delete Order
export const backendDeleteOrder = (id) => del(`${url.MODULE_ORDER}/${id}`)
// Status Update Order
export const backendPostOrderStatus = data => post(url.POST_ORDER_STATUS, data)
/*========== Sales Module ===============*/
// Get all Sales
export const backendGetAllSales = () => get(url.MODULE_SALES)
// Add New Sale
export const backendPostAddNewSale = data => post(url.MODULE_SALES, data)
// Update Sale
export const backendPatchUpdateSale = (id, data) => patch(`${url.MODULE_SALES}/${id}`, data)
// Get Sale Info
export const backendGetSaleInfo = (id) => get(`${url.MODULE_SALES}/${id}`)
//Delete Sale
export const backendDeleteSale = (id) => del(`${url.MODULE_SALES}/${id}`)
// Status Update Sale
export const backendPostSaleStatus = data => post(url.POST_SALES_STATUS, data)
/*========== Survey Questions Module ===============*/
// Get all Survey Questions
export const backendGetAllSurveyQuestions = () => get(url.MODULE_SURVEYQUESTION)
// Add New SurveyQuestion
export const backendPostAddNewSurveyQuestion = data => post(url.MODULE_SURVEYQUESTION, data)
// Update SurveyQuestion
export const backendPatchUpdateSurveyQuestion = (id, data) => patch(`${url.MODULE_SURVEYQUESTION}/${id}`, data)
// Get SurveyQuestion Info
export const backendGetSurveyQuestionInfo = (id) => get(`${url.MODULE_SURVEYQUESTION}/${id}`)
//Delete SurveyQuestion
export const backendDeleteSurveyQuestion = (id) => del(`${url.MODULE_SURVEYQUESTION}/${id}`)
// Status Update SurveyQuestion
export const backendPostSurveyQuestionStatus = data => post(url.POST_SURVEYQUESTION_STATUS, data)
/*========== Transactions Module ===============*/
// Get all Transactions
export const backendGetAllTransactions = () => get(url.MODULE_TRANSACTION)
// Add New Transaction
export const backendPostAddNewTransaction = data => post(url.MODULE_TRANSACTION, data)
// Update Transaction
export const backendPatchUpdateTransaction = (id, data) => patch(`${url.MODULE_TRANSACTION}/${id}`, data)
// Get Transaction Info
export const backendGetTransactionInfo = (id) => get(`${url.MODULE_TRANSACTION}/${id}`)
//Delete Transaction
export const backendDeleteTransaction = (id) => del(`${url.MODULE_TRANSACTION}/${id}`)
// Status Update Transaction
export const backendPostTransactionStatus = data => post(url.POST_TRANSACTION_STATUS, data)