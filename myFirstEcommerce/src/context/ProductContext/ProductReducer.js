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
		case 'GET_PRODUCT_BY_ID':
			return {
				...state,
				productById: action.payload.product,
			};
		case 'ADD_TO_CART':
			return {
				...state,
				cart: [action.payload,...state.cart],
			};
		default:
			return state;
	}
};
export default products;