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
				user: action.payload.user,
			};
		default:
			return state;
	}
};
export default users;