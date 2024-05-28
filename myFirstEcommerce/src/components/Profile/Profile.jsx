import React, { useContext, useEffect } from 'react'
import { Card, Spin } from 'antd';
import { UserOutlined, MailOutlined, FireOutlined } from '@ant-design/icons';
import { UserContext } from '../../context/UserContext/UserState'

const Profile = () => {

  const {getInfo, token, user} = useContext(UserContext);

  useEffect(()=>{
    getInfo()
  },[user])

console.log(user);
  if (!user) {
    return <Spin size="large" />;
  }

  return (
    <div id='profileDiv'>
    <Card title="User Information" style={{ width: 300 }}>
      <div>
        <UserOutlined style={{ marginRight: 8 }} />
        <strong>Name:</strong> {user.firstname}
      </div>
      <div>
        <MailOutlined style={{ marginRight: 8 }} />
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <FireOutlined style={{ marginRight: 8 }} />
        <strong>Birthgay: </strong> {user.birthday}
      </div>
    </Card>
    </div>
  );
};


export default Profile