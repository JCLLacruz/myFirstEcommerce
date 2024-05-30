import React, { useContext, useEffect } from 'react';
import { Card, Collapse, Spin } from 'antd';
import { UserOutlined, MailOutlined, FireOutlined } from '@ant-design/icons';
import { UserContext } from '../../context/UserContext/UserState';
import './Profile.scss';

const Profile = () => {
	const { getInfo, token, user } = useContext(UserContext);

const {Panel} = Collapse;

	useEffect(() => {
		getInfo();
	}, [token]);


	if (!user) {
		return <Spin size='large' />;
	}

	return (
		<div id='profileDiv'>
			<Card title='User Information' style={{ width: 700 }}>
				<div>
					<UserOutlined style={{ marginRight: 8 }} />
					Name: {user.firstname}
				</div>
				<div>
					<MailOutlined style={{ marginRight: 8 }} />
					Email: {user.email}
				</div>
				<div>
					<FireOutlined style={{ marginRight: 8 }} />
					Birthday: {user.birthday}
				</div>
				<div id='ordersDiv' className='mt-5'>
					<h2>Your Orders:</h2>
					{user.OrderIds.map((order) => {
            const amount = order.ProductIds.reduce((a,b)=>a +b.price,0).toFixed(2)
            console.log("AAAA",amount)
						return (
							<Collapse defaultActiveKey={['1']} >
								<Panel header={
                  <>
                  <p>Order: {order._id}</p>
                  <p>Total amount: {amount} €</p>
                  </>
              } key={order._id}>
									{order.ProductIds.map(product => {
                    return (
                      <div className='productOrderCard' key={product._id}>
                        <img src={product.image_path}/>
                        <div>
                        <h4>{product.productName}</h4>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        </div>
                      </div>
                    )
                  })}
								</Panel>
							</Collapse>
						);
					})}
				</div>
			</Card>
		</div>
	);
};

export default Profile;
