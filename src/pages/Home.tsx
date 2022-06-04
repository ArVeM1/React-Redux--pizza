import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import qs from 'qs';

import { Categories, PizzaBlock, Sort, Skeleton, Pagination } from '../components';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import { fetchPizzas } from '../redux/pizza/asyncActions';
import { selectFilter } from '../redux/filter/selectors';
import { selectPizza } from '../redux/pizza/selectors';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const dispatch = useAppDispatch();
  //   const navigate = useNavigate();
  //   const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { status, items } = useSelector(selectPizza);

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      })
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort, currentPage, searchValue]);

  //   React.useEffect(() => {
  //     if (isMounted.current) {
  //       const params = { categoryId: categoryId > 0 ? categoryId : null, sort: sort.sortProperty, currentPage };

  //       const queryString = qs.stringify(params, { skipNulls: true });

  //       navigate(`/?${queryString}`);
  //     }
  //   }, [categoryId, sort, currentPage, searchValue]);

  //   React.useEffect(() => {
  //     if (window.location.search) {
  //       const params = qs.parse(window.location.search.substring(1));
  //       const sortObj = sortList.find((obj) => obj.sortProperty === params.sortBy);
  //       dispatch(
  //         setFilters({
  //           searchValue: params.search,
  //           categoryId: Number(params.category),
  //           currentPage: Number(params.currentPage),
  //           sort: sortObj || sortList[0],
  //         })
  //       );
  //     }
  //     isMounted.current = true;
  //   }, []);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, id) => <Skeleton key={id} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
