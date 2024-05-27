import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import './Register.scss'

const Register = () => {
	const userInitialValue = {
		username: '',
		firstname: '',
		lastname: '',
		password: '',
		birthday: '',
	};
	const [user, setUser] = useState(userInitialValue);
	const { register } = useContext(UserContext);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const handleInputChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('user',user);
		register(user);
	};

	// const validateForm = () => {
	// 	const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	// 	const regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	// 	switch (true) {
	// 		case user.username == '':
	// 			setMessage('Please insert a username');
	// 			setBtnDisabled(true);
	// 			break;
	// 		case user.firstname == '':
	// 			setMessage('Please insert a firstname');
	// 			setBtnDisabled(true);
	// 			break;
	// 		case user.lastname == '':
	// 			setMessage('Please insert a lastname');
	// 			setBtnDisabled(true);
	// 			break;
	// 		case !regExEmail.test(user.email):
	// 			setMessage('Please insert a valid email');
	// 			setBtnDisabled(true);
	// 			break;
	// 		case !regExPassword.test(user.email):
	// 			setMessage('Please insert a valid email');
	// 			setBtnDisabled(true);
	// 			break;
	// 		default:
	// 			setMessage('');
	// 			setBtnDisabled(false);
	// 			break;
	// 	}
	// }

	// 	useEffect(() => {
	// 		validateForm();
	// 	}, [user]);

		return (
			<div id='registerDiv'>
				<h2>Register</h2>
				<form onSubmit={handleSubmit}>
					<div className='form-row'>
						<div className='col-md-4 mb-3'>
							<label htmlFor='firstnameInput'>First name</label>
							<input
								type='text'
								name='firstname'
								className='form-control'
								id='firstnameInput'
								placeholder='First name'
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className='col-md-4 mb-3'>
							<label htmlFor='lastnameInput'>Last name</label>
							<input
								type='text'
								name='lastname'
								className='form-control'
								id='lastnameInput'
								placeholder='Last name'
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className='col-md-4 mb-3'>
							<label htmlFor='birthdayInput'>Birthday</label>
							<input
								type='date'
								className='form-control'
								name='birthday'
								id='birthdayInput'
								placeholder='Last name'
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className='col-md-4 mb-3'>
							<label htmlFor='usernameInput'>Username</label>
							<input
								type='text'
								className='form-control'
								name='username'
								id='usernameInput'
								placeholder='Username'
								onChange={handleInputChange}
								required
							/>
						</div>
						
					</div>
					<div className='form-row'>
						<div className='col-md-6 mb-3'>
							<label htmlFor='emailInput'>Email</label>
							<input type='email' className='form-control' name='email' id='emailInput' placeholder='Email' onChange={handleInputChange} required />
						</div>
						<div className='col-md-3 mb-3'>
							<label htmlFor='passwordInput'>Password</label>
							<input
								type='text'
								className='form-control'
								name='password'
								id='passwordInput'
								placeholder='Password'
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
					<input className='btn btn-primary' type='submit'  /> 
				</form>
				<div>{message}</div>
			</div>
		);
};
export default Register;
