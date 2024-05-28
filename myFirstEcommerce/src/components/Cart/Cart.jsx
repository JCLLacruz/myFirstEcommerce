import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import Product from '../Product/Product';

const Cart = () => {
	const { productById, getProductById } = useContext(ProductContext);
	const [productsCart, setproductsCart] = useState([]);

	useEffect(() => {
		setproductsCart(JSON.parse(localStorage.getItem('cart')) || []);
	}, []);
  
	return (
		<div id='cartDiv' className='d-flex flex-wrap gap-2'>Cart
		</div>
	);
};

export default Cart;
