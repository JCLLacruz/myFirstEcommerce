import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import Product from '../Product/Product';
import './Products.scss';

const Products = () => {
	const { products, getAll } = useContext(ProductContext);

	useEffect(() => {
		getAll();
	}, []);

	return (
		<div id='productsDiv' className='d-flex flex-wrap gap-2'>
			{products.map((product) => (
				<Product product={product} _id={product._id} key={product._id}/>
			))}
		</div>
	);
};

export default Products;
