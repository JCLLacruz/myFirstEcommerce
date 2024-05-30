import React, { useContext, useEffect, useState } from 'react';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { UserContext } from '../../context/UserContext/UserState';
import { Badge, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ProductContext } from '../../context/ProductContext/ProductState';

const { SubMenu } = Menu;

const Header = () => {
	const [current, setCurrent] = useState('home');
	const { token, logout, user } = useContext(UserContext);
	const { cart } = useContext(ProductContext);

	useEffect(() => {
		if (current == 'logout') {
			logout();
		}
	}, [current]);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const handleClick = (e) => {
		setCurrent(e.key);
	};

	return (
		<div>
			<div id='brandDiv' className='d-flex p-3'>
				<img src='src\assets\img\pokebrand.png' />
				<h1>POKESHOP</h1>
			</div>
			<Menu theme='dark' selectedKeys={[current]} mode='horizontal' onClick={handleClick}>
				<Menu.Item key='home'>
					<Link to='/'>Home</Link>
				</Menu.Item>
				<Menu.Item key='shop'>
					<Link to='/products'>Shop</Link>
				</Menu.Item>
				<Menu.Item key='cart'>
					<Link to='/cart'>Cart </Link>
					<Badge count={cart.length} size='small'>
						<ShoppingCartOutlined size='large' />
					</Badge>
				</Menu.Item>
				<div className='position-absolute end-0'>
					<SubMenu key='userMenu' icon={<UserOutlined />} title='User' popupClassName='submenu-right-align'>
						{token ? (
							<>
								<Menu.Item key='profile'>
									<Link to='/profile'>Profile</Link>
								</Menu.Item>
								<Menu.Item key='logout'>
									<Link>Logout</Link>
								</Menu.Item>
								{user?.role == 'admin' ? (
									<Menu.Item key='admin'>
										<Link>Admin console</Link>
									</Menu.Item>
								) : (
									''
								)}
							</>
						) : (
							<>
								<Menu.Item key='login'>
									<Link to='/login'>Login</Link>
								</Menu.Item>
								<Menu.Item key='register'>
									<Link to='/register'>Register</Link>
								</Menu.Item>
							</>
						)}
					</SubMenu>
				</div>
			</Menu>
		</div>
	);
};

export default Header;
