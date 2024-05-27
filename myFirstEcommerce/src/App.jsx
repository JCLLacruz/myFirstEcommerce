import './App.css';
import './custom.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext/UserState';
import { ProductProvider } from './context/ProductContext/ProductState';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';
import Register from './components/Register/Register';

function App() {
	return (
		<>
			<BrowserRouter>
				<UserProvider>
					<ProductProvider>
						<Header />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/login' element={<Login />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='/register' element={<Register />} />
							<Route path='/products' element={<Products />} />
							<Route path='/profile' element={<Profile />} />
						</Routes>
						<Footer />
					</ProductProvider>
				</UserProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
