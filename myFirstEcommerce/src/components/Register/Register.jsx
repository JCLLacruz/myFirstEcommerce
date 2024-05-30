import React, { useContext } from 'react';
import { Button, DatePicker, Form, Input } from 'antd';
import { UserContext } from '../../context/UserContext/UserState';
import './Register.scss';
import { useNavigate } from 'react-router-dom';

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

const Register = () => {
	const [form] = Form.useForm();
	const navigate = useNavigate();

	const { register } = useContext(UserContext);

	const onFinish = (values) => {
		register(values);
		navigate('/login')
	};

	return (
		<div id='formDiv'>
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
				<h1>Register</h1>
				<Form.Item
					name='username'
					label='Username'
					tooltip='What do you want others to call you?'
					rules={[
						{
							required: true,
							message: 'Please input your Username!',
							whitespace: false,
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name='firstname'
					label='First Name'
					rules={[
						{
							required: true,
							message: 'Please input your First Name!',
							whitespace: true,
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name='lastname'
					label='Last Name'
					rules={[
						{
							required: true,
							message: 'Please input your Last Name!',
							whitespace: true,
						},
					]}
				>
					<Input />
				</Form.Item>
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
					label='Birthday'
					name='birthday'
					rules={[
						{
							required: true,
							message: 'Please input your birthday!',
						},
					]}
				>
					<DatePicker />
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
				<Form.Item
					name='confirm'
					label='Confirm Password'
					dependencies={['password']}
					hasFeedback
					rules={[
						{
							required: true,
							message: 'Please confirm your password!',
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve();
								}
								return Promise.reject(new Error('The new password that you entered do not match!'));
							},
						}),
					]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item {...tailFormItemLayout}>
					<Button type='primary' htmlType='submit'>
						Register
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
export default Register;
