const products = (state, action) => {
	switch (action.type) {
		case 'POST_PRODUCT':
			return {
				...state,
				product: action.payload,
			};
		case 'GET_ALL_PRODUCTS':
			return {
				...state,
				products: action.payload.products,
			};
		default:
			return state;
	}
};
export default products;