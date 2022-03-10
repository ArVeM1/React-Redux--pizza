import { createAction } from "@reduxjs/toolkit";

export const addPizzaCart = createAction('ADD_PIZZA_CART');
export const removePizzaCart = createAction('REMOVE_PIZZA_CART');
export const incPizzaItem = createAction('INC_PIZZA_ITEM');
export const decPizzaItem = createAction('DEC_PIZZA_ITEM');
export const clearCart = createAction('CLEAR_CART');