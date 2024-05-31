import React from 'react';
import {Layout} from 'antd';
const { Footer } = Layout;
import './MyFooter.scss'

const myFooter = () => {
	return (
		<Footer
			id='myFooter'
			style={{
				textAlign: 'center',
			}}
		>
			Created by Juan Carlos ©{new Date().getFullYear()}
		</Footer>
	);
};

export default myFooter;
