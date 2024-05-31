import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import './Product.scss';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, notification } from 'antd';
import { UserContext } from '../../context/UserContext/UserState';

const Product = ({ product, userRole, cart }) => {
	const { addToCart, getAll } = useContext(ProductContext);
	const { token } = useContext(UserContext);
	const [api, contextHolder] = notification.useNotification();

	const openNotification = (product, message) => {
		api.open({
			message,
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
						{cart == 'inCart' && (
								<button
									className='btn btn-primary'
									onClick={() => {
										addToCart(product);
										const message = <p>{product.productName} was added to cart</p>;
										openNotification(product, message);
									}}
								>
									Add to Cart
								</button>)
						}
					</div>
				</div>
			</Card>
		</>
	);
};

export default Product;
