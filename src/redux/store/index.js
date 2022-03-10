import { configureStore } from "@reduxjs/toolkit";
// import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import filters from '../reducers/filters';
import pizzas from "../reducers/pizzas";
import cart from "../reducers/cart";
import thunk from "redux-thunk";

const store = configureStore({
	reducer: {filters, pizzas, cart},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
	devTools: process.env.NODE_ENV !== 'production',
}) 


// const store = createStore( 
// 				combineReducers({pizzas, filters}),
// 				compose(applyMiddleware(thunk),
// 						window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 				)
// );

export default store;