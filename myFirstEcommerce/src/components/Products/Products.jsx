import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import Product from '../Product/Product';
import './Products.scss';

const Products = () => {
	const { products, getAll } = useContext(ProductContext);
	const [page, setPage] = useState(1);
	const [btnDisabled, setBtnDisabled] = useState(true);


const nextPage = () => {
	if (page <= 1){
		setBtnDisabled(true);
	}
	setPage(page + 1);
}
const prevPage = () => {
	setPage(page - 1);
}

	useEffect(() => {
		getAll(page);
	}, [page]);

	return (
		<div id='productsView' className='d-flex flex-column p-3 align-items-center'>
			<h1>Catch them all!!!</h1>
		<div id='productsDiv' className='d-flex flex-wrap justify-content-center gap-2'>
			{products.map((product) => (
				<Product product={product} _id={product._id} key={product._id}/>
			))}
		</div>
		<div id='btnDiv' className='d-flex gap-5'>
		<input className='btn btn-primary' onClick={()=>prevPage()} placeholder='Prev' disable={setBtnDisabled} />
		<input className='btn btn-primary' onClick={()=>nextPage()} placeholder='Next'/>
		</div>
		</div>
	);
};

export default Products;
