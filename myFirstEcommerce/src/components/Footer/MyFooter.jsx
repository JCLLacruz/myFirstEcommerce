import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
	key: index + 1,
	label: `nav ${index + 1}`,
}));

const myFooter = () => {
	return (
		<Footer
			theme='dark'
			style={{
				textAlign: 'center',
			}}
		>
			Created by Juan Carlos ©{new Date().getFullYear()}
		</Footer>
	);
};

export default myFooter;
