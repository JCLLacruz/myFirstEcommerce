import React, { useContext, useEffect, useState } from 'react';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { UserContext } from "../../context/UserContext/UserState";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Header.scss';

const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState('home');
  const { token, logout, user } = useContext(UserContext);

  useEffect(()=>{
	if(current == 'logout'){
		logout(user._id);
	}
  },[current])

console.log('token',token,'user',user);
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu theme="dark" selectedKeys={[current]} mode="horizontal" onClick={handleClick}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="shop">
          <Link to="/products">Shop</Link>
        </Menu.Item>
        <SubMenu key="userMenu" icon={<UserOutlined />} title="User" popupClassName="submenu-right-align">
          <Menu.Item key="register">
            <Link to="/register">Register</Link>
          </Menu.Item>
		  {token ? (
        <>
          <Menu.Item key="profile">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="logout">
            <Link>Logout</Link>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="login">
            <Link to="/login">Login</Link>
        </Menu.Item>
      )}
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Header;
