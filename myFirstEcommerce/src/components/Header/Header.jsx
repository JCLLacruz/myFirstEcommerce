import React, { useContext, useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import styled from "@emotion/styled";
import { UserContext } from '../../context/UserContext/UserState';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ProductContext } from '../../context/ProductContext/ProductState';

const { SubMenu } = Menu;

const Header = () => {
	const [current, setCurrent] = useState('home');
	const { token, logout, user } = useContext(UserContext);
  const {cart} = useContext(ProductContext);

	useEffect(() => {
		if (current == 'logout') {
			logout(user._id);
		}
	}, [current]);

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart])

	const handleClick = (e) => {
		setCurrent(e.key);
	};

	return (
		<div>
      <div className='d-flex'>
      <img src=''/>
      <h1>POKESHOP</h1>
      </div>
			<Menu theme='dark' selectedKeys={[current]} mode='horizontal' onClick={handleClick}>
				<Menu.Item key='home'>
					<Link to='/'>Home</Link>
				</Menu.Item>
				<Menu.Item key='shop'>
					<Link to='/products'>Shop</Link>
				</Menu.Item>
				<SubMenu key='userMenu' icon={<UserOutlined />} title='User' popupClassName='submenu-right-align' style={{ position: 'end' }}>
					{token ? (
						<>
							<Menu.Item key='profile'>
								<Link to='/profile'>Profile</Link>
							</Menu.Item>
							<Menu.Item key='cart'>
								<Link to='/cart'>Cart</Link>
							</Menu.Item>
							<Menu.Item key='logout'>
								<Link>Logout</Link>
							</Menu.Item>
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
			</Menu>
		</div>
	);
};

export default Header;
