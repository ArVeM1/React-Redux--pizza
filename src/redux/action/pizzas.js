import { createAction } from "@reduxjs/toolkit";
import axios from 'axios';



export const fetchPizzas = (sortBy, category) => (dispatch) => {
	dispatch(setLoaded(false));
	axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
			.then(({ data }) => dispatch(setPizzas(data)));
}

export const setPizzas = createAction('SET_PIZZAS');
export const setLoaded = createAction('SET_LOADED');