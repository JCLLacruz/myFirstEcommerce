
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext/UserState';
import { ProductProvider } from './context/ProductContext/ProductState';
import Header from './components/Header/Header';
import MyFooter from './components/Footer/MyFooter';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';
import Register from './components/Register/Register';
import AdminConsole from './components/AdminConsole/AdminConsole';
import './App.css';
import './custom.css';

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
							<Route path='/adminConsole' element={<AdminConsole />} />
						</Routes>
						<MyFooter />
					</ProductProvider>
				</UserProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
