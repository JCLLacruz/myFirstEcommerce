import { createContext, useReducer } from 'react';
import ProductReducer from './ProductReducer';
import axios from 'axios';

const API_URL = 'http://localhost:3001/products';

const cart = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
	products: [],
	product: {},
	productById: {},
	cart: cart,
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProductReducer, initialState);

	const create = async (user) => {
		try {
			const res = await axios.post(API_URL + '/', product);
			dispatch({
				type: 'POST_PRODUCT',
				payload: res.data.product,
			});
		} catch (error) {
			console.error(error);
		}
	};
	const getAll = async (page) => {
		try {
			const res = await axios.get(API_URL + '/' + `?page=${page}`);
			dispatch({
				type: 'GET_ALL_PRODUCTS',
				payload: res.data,
			});
		} catch (error) {
			console.error(error);
		}
	};
	const getProductById = async (_id) => {
		try {
			const res = await axios.get(API_URL + '/id/' + _id);
			dispatch({
				type: 'GET_PRODUCT_BY_ID',
				payload: res.data,
			});
		} catch (error) {
			console.error(error);
		}
	};
	const deleteProduct = async (_id) => {
		try {
			const token = localStorage.getItem('token');
			const res = await axios.delete(API_URL + '/id/' + _id,{
				headers: {
				  Authorization: token,
				},});
				dispatch({
					type: 'DELETE_PRODUCT',
					payload: res.data
				})
		} catch (error) {
			console.error(error);
		}
	};
	const updateProduct = async ( product) => {
		try {
			const token = localStorage.getItem('token');
			const res = await axios.put(API_URL + '/id/' +product._id, product, {
				headers: {
				  Authorization: token,
				},});
				dispatch({
					type: 'UPDATE_PRODUCT',
					payload: res.data
				})
		} catch (error) {
			console.error(error);
		}
	};
	const addToCart = (product) => {
		dispatch({
			type: 'ADD_TO_CART',
			payload: product,
		});
	};
	const clearCart = () => {
		dispatch({
			type: 'CLEAR_CART',
		});
	};

	return (
		<ProductContext.Provider
			value={{
				product: state.product,
				products: state.products,
				productById: state.productById,
				cart: state.cart,
				create,
				getAll,
				getProductById,
				addToCart,
				clearCart,
				deleteProduct,
				updateProduct
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
