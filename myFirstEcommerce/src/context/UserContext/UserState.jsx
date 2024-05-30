import { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
import axios from 'axios';

const API_URL = 'https://serverecommerce-w9o2.onrender.com/users';

const token = localStorage.getItem('token') || '';
const user = JSON.parse(localStorage.getItem('user')) || '';

const initialState = {
	token: token,
	users: [],
	user: user,
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
				localStorage.setItem('user', JSON.stringify(res.data.user));
			}
		} catch (error) {
			console.error(error);
		}
	};
	const getInfo = async (user) => {
		try {
			const token = localStorage.getItem('token');
			const res = await axios.get(API_URL + '/userinfo', {
				headers: {
				  Authorization: token,
				},});
			dispatch({
				type: 'LOGGED_USER',
				payload: res.data,
			});
		} catch (error) {
			console.error(error);
		}
	};
	const logout = async()=>{
		try {
			const token = localStorage.getItem("token")
			const res = await axios.delete(API_URL +"/logout/",{
				headers:{
					Authorization: token
				}
			})
			if(res.data){
				localStorage.removeItem("token")
				dispatch({
					type:"LOGOUT_USER"
				})
			}
	
		} catch (error) {
			console.error(error);
		}
	  };
	return (
		<UserContext.Provider
			value={{
				users: state.users,
				user: state.user,
				token:state.token,
				register,
				login,
				getInfo,
				logout,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
