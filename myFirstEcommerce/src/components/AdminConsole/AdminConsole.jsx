import React, { useContext, useEffect, useState } from 'react';
import AdminProducts from '../AdminProducts/AdminProducts';
import AdminOrders from '../AdminOrders/AdminOrders';


const AdminConsole = () => {
	

	return (
		<div id='adminConsoleDiv'>
			<AdminProducts/>
			<AdminOrders/>
		</div>
	);
};

export default AdminConsole;
