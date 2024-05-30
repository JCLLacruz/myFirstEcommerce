import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import './Product.scss';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, notification } from 'antd';

const Product = ({ product, _id }) => {
	const { addToCart } = useContext(ProductContext);
	const [api, contextHolder] = notification.useNotification();

	const openNotification = (product) => {
		api.open({
			message: <p>{product.productName} was added to cart</p>,
			icon: (
				<div>
					<div>
					<ShoppingCartOutlined
						style={{
							color: '#108ee9',
						}}
					/>
					</div>
					<img
						alt='pokemon {product.name}'
						src={product.image_path}
						style={{
							width: 200,
						}}
					/>
				</div>
			),
		});
	};

	return (
		<>
			{contextHolder}
			<Card
				style={{
					width: 200,
				}}
				cover={<img alt='pokemon {product.name}' src={product.image_path} />}
			>
				<div>
					<div className='mb-3'>
						<h2>{product.productName}</h2>
						<p>Description: {product.description}</p>
						<p className='price'>{product.price.toFixed(2)}€</p>
					</div>
					<div className='mt-5'>
						<button
							className='btn btn-primary'
							onClick={() => {
								addToCart(product);
								openNotification(product);
							}}
						>
							Add to Cart
						</button>
					</div>
				</div>
			</Card>
		</>
	);
};

export default Product;
