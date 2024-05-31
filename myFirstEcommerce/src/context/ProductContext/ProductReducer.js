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
		case 'CLEAR_CART':
			return {
				...state,
				cart: [],
			};
		case 'DELETE_PRODUCT':
			return {
				...state,
				products: state.products.filter((product) => product._id !== action.payload.product._id)
			};
		case 'UPDATE_PRODUCT':
			return {
				...state,
				products: state.products.map(product => {
					if(product._id == action.payload.product._id){
						product =action.payload.product
					}
					return product
				})
			};
		default:
			return state;
	}
};
export default products;