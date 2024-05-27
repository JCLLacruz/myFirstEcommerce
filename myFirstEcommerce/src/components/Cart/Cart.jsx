import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductState';
import Product from '../Product/Product';

const Cart = () => {
	const { productById, getProductById } = useContext(ProductContext);
	const [productsCart, setproductsCart] = useState([]);

	useEffect(() => {
		setproductsCart(JSON.parse(localStorage.getItem('cart')) || []);
	}, []);
console.log(productsCart);
	return (
		<div id='cartDiv' className='d-flex flex-wrap gap-2'>
			{productsCart === null ? (
                <h2>Your cart is empty</h2>
            ) : (
              productsCart.map(productId => {
                getProductById(productId)
                return (
                      <Product product={productById} key={productId} />
                  )
              } 
              )
            )}
		</div>
	);
};

export default Cart;
