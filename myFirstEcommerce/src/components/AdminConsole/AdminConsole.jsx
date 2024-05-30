import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import './AdminConsole.scss';
import { ProductContext } from '../../context/ProductContext/ProductState';
import Product from '../Product/Product';
import { Collapse } from 'antd';

const AdminConsole = () => {
	const { user } = useContext(UserContext);
	const { products, getAll } = useContext(ProductContext);

    const {Panel} = Collapse;

	useEffect(() => {
		getAll();
	}, []);

	return (
		<div id='adminConsoleDiv'>
			<h1>{user.firstname} are Administrator of the shop.</h1>
			<Collapse defaultActiveKey={['1']} >
				<Panel header={<h2>Admin database Products</h2>} key='productAdmin'>
                <div className='d-flex flex-wrap justify-content-center gap-2'>
					{products.map((product) => {
                    return (
                        <div>
                            <Product userRole={user.role} product={product} className='w-25'/>
                        </div>
                    )})}
                </div>
				</Panel>
			</Collapse>
		</div>
	);
};

export default AdminConsole;
