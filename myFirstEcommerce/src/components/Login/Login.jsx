import React, { useContext, useEffect } from 'react';
import { Button, notification, Form, Input } from 'antd';
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom';
import { SmileOutlined } from '@ant-design/icons';

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 8,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 16,
		},
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

const Login = () => {
  const [form] = Form.useForm();

  const {login, user, error} = useContext(UserContext);
  const [api, contextHolder] = notification.useNotification();

  const navigate = useNavigate();
  
  const openNotification = (message, description) => {
    api.open({
      message,
      description,
      icon: (
        <SmileOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
  };

  const onFinish = (values) => {
    login(values);
	const message = `Welcome`
	const description = 'Welcome to the world of pokemons! Ready to capture them, for a small price, all of them!!';
	openNotification(message, description);
	setTimeout(()=>{
		navigate('/profile')
	},'2000')
  };
 
  useEffect(()=>{
	if(error != null){
		const message = `We have a problem with your login. `
		const description = 'Please crontrole your credentials';
		openNotification(message, description);
	}
  },[error])

  return (
    <div id='formDiv'>
		{contextHolder}
      <Form
				{...formItemLayout}
				form={form}
				name='register'
				onFinish={onFinish}
				style={{
					maxWidth: 600,
				}}
				scrollToFirstError
				autoComplete='on'
			>
				<h1>Login</h1>
				<Form.Item
					name='email'
					label='E-mail'
					rules={[
						{
							type: 'email',
							message: 'The input is not valid E-mail!',
						},
						{
							required: true,
							message: 'Please input your E-mail!',
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name='password'
					label='Password'
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
					hasFeedback
				>
					<Input.Password />
				</Form.Item>
				<Form.Item {...tailFormItemLayout}>
					<Button type='primary' htmlType='submit'>
						Login
					</Button>
				</Form.Item>
			</Form>
    </div>
  )
}

export default Login