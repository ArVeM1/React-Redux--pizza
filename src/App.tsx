import React, { Suspense } from 'react';
import { Home } from './pages/Home';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const ErrorPage = React.lazy(() => import(/* webpackChunkName: "ErrorPage" */ './pages/404'));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Идет загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
