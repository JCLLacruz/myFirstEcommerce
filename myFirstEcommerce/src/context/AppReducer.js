const users = (state, action) => {
	switch (action.type) {
		case 'POST_USER':
			return {
				...state,
				news: action.payload,
			};
		default:
			return state;
	}
};
export default users;