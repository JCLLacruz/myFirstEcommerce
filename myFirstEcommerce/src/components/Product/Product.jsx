import React from 'react';
import './Product.scss'

const Product = ({ product }) => {
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
			</div>
		</>
	);
};

export default Product;
