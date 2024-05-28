import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import './Product.scss';
import { SmileOutlined } from '@ant-design/icons';
import { Card, notification } from 'antd';

const Product = ({ product, _id }) => {
	const { productById, getProductById } = useContext(ProductContext);
	const [api, contextHolder] = notification.useNotification();


	const openNotification = () => {
		api.open({
		  message: `Product ${product.productName} added`,
		  description:
			'We are waiting for you in the cart to finish your purchase.',
		  icon: (
			<SmileOutlined
			  style={{
				color: '#108ee9',
			  }}
			/>
		  ),
		});
	  };

	const addToCart = (_id) => {
		getProductById(_id);
		if (localStorage.cart == undefined) {
			const firstCart = [productById._id];
			localStorage.setItem('cart', JSON.stringify(firstCart));
		} else {
			let productsCart = JSON.parse(localStorage.getItem('cart'));
			productsCart.push(productById._id);
			localStorage.removeItem('cart');
			localStorage.setItem('cart', JSON.stringify(productsCart));
		}
	openNotification();
	};

	return (
		<>
				{contextHolder}
			<Card
				style={{
					width: 300,
				}}
				cover={<img alt='pokemon {product.name}' src={product.image_path} />}
			>
				<h2>{product.productName}</h2>
				<p>Description: {product.description}</p>
				<p><b>{product.price}€</b></p>
				<button className='btn btn-primary' onClick={() => addToCart(_id)}>	Add to Cart    
					<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-cart2 ms-2' viewBox='0 0 16 16'>
						<path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0' />
					</svg>
				</button>
			</Card>
		</>
	);
};

export default Product;
