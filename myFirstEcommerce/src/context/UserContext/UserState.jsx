import { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
import axios from 'axios';

const API_URL = 'https://serverecommerce-w9o2.onrender.com/users';

const token = localStorage.getItem('token') || '';

const initialState = {
	token: token,
	users: [],
	user: {},
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(UserReducer, initialState);

	const register = async (user) => {
		try {
			const res = await axios.post(API_URL + '/', user);
			dispatch({
				type: 'REGISTER_USER',
				payload: res.data.user,
			});
		} catch (error) {
			console.error(error);
		}
	};
	const login = async (user) => {
		try {
			const res = await axios.post(API_URL + '/login', user);
			dispatch({
				type: 'LOGIN_USER',
				payload: res.data,
			});
			if (res.data) {
				localStorage.setItem('token', res.data.token);
			}
			console.log('post', res.data);
		} catch (error) {
			console.error(error);
		}
	};
	const getInfo = async (user) => {
		try {
			const token = localStorage.getItem('token');
			const res = await axios.get(API_URL + '/login', {
				headers: {
				  Authorization: token,
				},});
			dispatch({
				type: 'LOGIN_USER',
				payload: res.data,
			});
			if (res.data) {
				localStorage.setItem('token', res.data.token);
			}
			console.log('post', res.data);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<UserContext.Provider
			value={{
				user: state.user,
				token,
				register,
				login,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
