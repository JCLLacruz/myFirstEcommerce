import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const register = () => {
	const userInitialValue = {
		username:'',
		firstname:'',
		lastname:'',
		password:'',
		birthday:'',
	}
	const [user, setUser] = useState(userInitialValue);
	const { register } = useContext(GlobalContext);

// setUser(()=>{

// })
	const handleSubmit = (event) => {
		event.preventDefault();
		register(user);
	};

	return (
		<div id='registerDiv'>
		<form onSubmit={handleSubmit}>
			<div className='form-row'>
				<div className='col-md-4 mb-3'>
					<label htmlFor='validationDefault01'>First name</label>
					<input type='text' className='form-control' id='validationDefault01' placeholder='First name' value='Mark'  required />
				</div>
				<div className='col-md-4 mb-3'>
					<label htmlFor='validationDefault02'>Last name</label>
					<input type='text' className='form-control' id='validationDefault02' placeholder='Last name' value='Otto' required />
				</div>
				<div className='col-md-4 mb-3'>
					<label htmlFor='validationDefault02'>Birthday</label>
					<input type='date' className='form-control' id='validationDefault02' placeholder='Last name' value='Otto' required />
				</div>
				<div className='col-md-4 mb-3'>
					<label htmlFor='validationDefaultUsername'>Username</label>
					<div className='input-group'>
						<div className='input-group-prepend'>
							<span className='input-group-text' id='inputGroupPrepend2'>
								@
							</span>
						</div>
						<input
							type='text'
							className='form-control'
							id='validationDefaultUsername'
							placeholder='Username'
							aria-describedby='inputGroupPrepend2'
							required
						/>
					</div>
				</div>
			</div>
			<div className='form-row'>
				<div className='col-md-6 mb-3'>
					<label htmlFor='validationDefault03'>Email</label>
					<input type='email' className='form-control' id='validationDefault03' placeholder='Email' required />
				</div>
				<div className='col-md-3 mb-3'>
					<label htmlFor='validationDefault04'>Password</label>
					<input type='text' className='form-control' id='validationDefault04' placeholder='Password' required />
				</div>
			</div>
			<button className='btn btn-primary' type='submit'>
				Submit form
			</button>
		</form>
		</div>
	);
};

export default register;
