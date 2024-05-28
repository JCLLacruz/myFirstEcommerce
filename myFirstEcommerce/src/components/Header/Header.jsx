import React, { useState } from 'react';
import { UserOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Header.scss';

const items = [
	{
		key: 'home',
		label: <Link to='/'>Home</Link>,
	},
	{
		key: 'shop',
		label: <Link to='/products'>Shop</Link>,
	},
	{
		label: 'User',
		key: 'userMenu',
		icon: <UserOutlined />,
		children: [
			{
				key: 'login',
				label: <Link to='/login'>Login</Link>,
			},
			{
				key: 'register',
				label: <Link to='/register'>Register</Link>,
			},
			{
				key: 'profile',
				label: <Link to='/profile'>Profile</Link>,
			},
		],
		popupClassName: 'submenu-right-align',
	},
];

const Header = () => {
	const [current, setCurrent] = useState('mail');

	return (
		<div>
			<Menu theme='dark' selectedKeys={[current]} mode='horizontal' items={items} />
		</div>
	);
};

export default Header;
