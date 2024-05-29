import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import Product from '../Product/Product';
import './Products.scss';

const Products = () => {
	const { products, getAll } = useContext(ProductContext);
	const [page, setPage] = useState(1);
	const [btnDisabledNext, setBtnDisabledNext] = useState(false);
	const [btnDisabledPrev, setBtnDisabledPrev] = useState(false);

	const setBtnDisabled = () => {
		if(page == 1) {
			setBtnDisabledPrev(true)
		} else {
			setBtnDisabledPrev(false)
		};
		if (page === products.length) {
			setBtnDisabledNext(true)
		}
	};

	const nextPage = () => {
		setPage(page + 1);
	};
	const prevPage = () => {
		setPage(page - 1);
	};

	useEffect(() => {
			getAll(page);
			setBtnDisabled()
	}, [page]);

	return (
		<div id='productsView' className='d-flex flex-column p-3 align-items-center'>
			<h1>Catch them all!!!</h1>
			<div id='productsDiv' className='d-flex flex-wrap justify-content-center gap-2'>
				{products.map((product) => (
					<Product product={product} _id={product._id} key={product._id} />
				))}
			</div>
			<div id='btnDiv' className='d-flex gap-5 mt-3'>
				<button className='btn btn-primary' onClick={() => prevPage()} disabled={btnDisabledPrev} >Prev</button>
				<button className='btn btn-primary' onClick={() => nextPage()} disabled={btnDisabledNext}>Next</button>
			</div>
		</div>
	);
};

export default Products;
