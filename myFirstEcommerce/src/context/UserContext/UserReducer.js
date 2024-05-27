const users = (state, action) => {
	switch (action.type) {
		case 'POST_USER':
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};
export default users;