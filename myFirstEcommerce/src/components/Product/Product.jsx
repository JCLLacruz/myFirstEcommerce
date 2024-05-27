
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import './Product.scss';

const Product = ({ product, _id}) => {


	const { productById, getProductById } = useContext(ProductContext);

	const addToCart = (_id)=> {
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
		// setTimeout(() => {
		// 	navigate('/ListNews');
		// }, '3000');
	};


	return (
		<>
			<div className='card'>
				<img className='card-img-top' src={product.image_path} alt='Card image cap' />
				<div className='card-body'>
					<h5 className='card-title'>{product.name}</h5>
					<p className='card-text'>Description: {product.description}</p>
					<p className='card-text'>
						Price:
						<b> {product.price}€</b>
					</p>
				</div>
				<button className='btn btn-primary' onClick={() => addToCart(_id)}>	Add to Cart    
					<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-cart2 ms-2' viewBox='0 0 16 16'>
						<path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0' />
					</svg>
				</button>
			</div>
		</>
	);
};

export default Product;
