import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import Product from '../Product/Product';
import { Empty } from 'antd';
import OrderService from '../../services/OrderService.js';

const Cart = () => {
	const { cart, clearCart } = useContext(ProductContext);

	if (cart.length == 0) {
		return (
			<Empty
				image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
				imageStyle={{ height: 60 }}
				description={<span>Cart is Empty</span>}
			></Empty>
		);
	}
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const createNewOrder = () => {
		OrderService.createOrder(cart);
		clearCart();
	};

	return (
		<div className='d-flex flex-column p-3 align-items-center'>
			<h1>Your Cart</h1>
			<div className='d-flex gap-2 mb-3'>
				<button className='btn btn-primary' onClick={clearCart}>
					Empty cart
				</button>
				<button className='btn btn-primary' onClick={createNewOrder}>
					Order
				</button>
			</div>
			<div id='cartDiv' className='d-flex flex-wrap justify-content-center gap-2'>
				{cart.map((product) => (
					<Product product={product} key={product._id} />
				))}
			</div>
		</div>
	);
};

export default Cart;
