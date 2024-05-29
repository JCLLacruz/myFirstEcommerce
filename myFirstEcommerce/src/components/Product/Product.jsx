import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import './Product.scss';
import { SmileOutlined } from '@ant-design/icons';
import { Card, notification } from 'antd';

const Product = ({ product, _id }) => {
	const { addToCart } = useContext(ProductContext);
	const [api, contextHolder] = notification.useNotification();

	const openNotification = () => {
		api.open({
			message: `Product ${product.productName} added`,
			description: 'We are waiting for you in the cart to finish your purchase.',
			icon: (
				<SmileOutlined
					style={{
						color: '#108ee9',
					}}
				/>
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
						<p className='pPrice'>{product.price}€</p>
					</div>
					<div className='mt-5'>
						<button className='btn btn-primary' onClick={() => addToCart(product)}>
							Add to Cart
						</button>
					</div>
				</div>
			</Card>
		</>
	);
};

export default Product;
