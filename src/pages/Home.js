import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, Sort, PizzaBlock, Skeleton } from '../components/';

import { fetchPizzas } from '../redux/action/pizzas';
import { setCategory, setSortBy } from '../redux/action/filters';
import { addPizzaCart } from '../redux/action/cart';

const categoryName = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const sortItems = [
	{name: "популярности", type: 'popular', order: 'desc'}, 
	{name: "цене", type: 'price', order: 'desc'}, 
	{name: "алфавиту", type: 'name', order: 'asc'}
];

const Home = () => {
	const dispatch = useDispatch();
	const { items, isLoaded } = useSelector(state => state.pizzas);
	const { category, sortBy } = useSelector(state => state.filters);
	const cartItems = useSelector(({cart}) => cart.items);

	useEffect(() => {
		dispatch(fetchPizzas(sortBy, category));
	}, [category, sortBy]);

	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index));
	}, [])

	const onSelectSortType = useCallback((type) => {
		dispatch(setSortBy(type));
	}, [])

	const handleAddPizzaToCart = (obj) => {
		dispatch(addPizzaCart(obj));
	}

	return (
		<div className="container">
			<div className="content__top">
				<Categories activeCategory={category} 
							onClickCategory={onSelectCategory} 
							items={categoryName}
				/>

				<Sort onClickSortType={onSelectSortType}
						activeSortType={sortBy.type} 
						items={sortItems}
				/>  
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					isLoaded ? 
					items.map(item => (
						<PizzaBlock 
							onClickAddPizza={handleAddPizzaToCart}
							key={item.id}
							addedCount={cartItems[item.id] && cartItems[item.id].items.length}
							{...item} />
					)) :
					Array(12).fill(0).map((_, index) => (<Skeleton key={index}/>))
				}
			</div>
		</div>
	);
};

export default Home;