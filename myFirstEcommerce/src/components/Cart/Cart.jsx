import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import Product from '../Product/Product';
import { Empty } from 'antd';

const Cart = () => {
	const { cart } = useContext(ProductContext);

	if (cart.length == 0) {
		return (
			<Empty
				image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
				imageStyle={{ height: 60 }}
				description={<span>Cart is Empty</span>}
			></Empty>
		);
	}

	return (
		<div className='d-flex flex-column p-3 align-items-center'>
			<h1>Your Cart</h1>
			<div className='d-flex gap-2 mb-3'>
				<button className='btn btn-primary'>Empty cart</button>
				<button className='btn btn-primary'>Order</button>
			</div>
			<div id='cartDiv' className='d-flex flex-wrap justify-content-center gap-2'>
				{cart.map((product) => (
					<Product product={product} />
				))}
			</div>
		</div>
	);
};

export default Cart;
