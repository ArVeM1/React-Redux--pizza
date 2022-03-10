import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from './components/index';
import { Home } from './pages';

import Spinner from './components/spinner/Spinner';


const Cart = lazy(() => import('./pages/Cart.js'));

function App() {	
	return (
		<Router>
			<div className="wrapper">
				<Header />
				<div className="content">
					<Suspense fallback={<Spinner/>}>
						<Routes>
							<Route path='/' element={<Home />} exact/>
							<Route path='/cart' element={<Cart/>} exact/>
						</Routes>
					</Suspense>
				</div>
			</div>
		</Router>
	);
}

export default App;
