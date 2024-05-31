const users = (state, action) => {
	switch (action.type) {
		case 'REGISTER_USER':
			return {
				...state,
				user: action.payload,
			};
		case 'LOGIN_USER':
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
			};
		case 'LOGGED_USER':
			return {
				...state,
				user: action.payload[0].user,
				token: action.payload[1],
			};
		case 'LOGOUT_USER':
			return {
				...state,
				token: '',
				user: null
			};
		case 'ERROR_LOGIN':
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
export default users;