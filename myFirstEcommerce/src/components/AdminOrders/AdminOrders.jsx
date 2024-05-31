import React, { useEffect, useState } from 'react';
import { Collapse, notification, Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import OrderService from '../../services/OrderService';

const { Panel } = Collapse;

const AdminOrders = () => {
	const [orders, setOrders] = useState([]);
	const [formData, setFormData] = useState({ _id: '', status: '' });
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [api, contextHolder] = notification.useNotification();

	const getOrders = async () => {
		try {
			const res = await OrderService.getAllOrders();
			setOrders(res.orders);
		} catch (error) {
			console.error('Failed to fetch orders:', error);
		}
	};

	const showModal = (order) => {
		setIsModalOpen(true);
		setFormData({ _id: order._id, status: order.status });
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleOk = () => {
		setIsModalOpen(false);
		OrderService.updateOrder(formData);
	};

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const deleteOrder = async (orderId) => {
		try {
			await OrderService.deleteOrder(orderId);
			const message = `Order ${orderId} was deleted from the database`;
			api.open({ message, icon: <DeleteOutlined style={{ color: '#ff4d4f' }} /> });
			setOrders(orders.filter((order) => order._id !== orderId));
		} catch (error) {
			console.error('Failed to delete order:', error);
		}
	};

	useEffect(() => {
		getOrders();
	}, []);

	return (
		<div>
			{contextHolder}
			<Collapse defaultActiveKey={['1']}>
				<Panel header={<h2>Admin Orders</h2>} key='1'>
					<div>
						{orders.map((order) => (
							<div key={order._id} style={{ marginBottom: '20px', borderBottom: '1px solid #e8e8e8', paddingBottom: '10px' }}>
								<div>
									<h4>Order: {order._id}</h4>
								</div>
								<div className='d-flex gap-2'>
									<EditOutlined onClick={() => showModal(order)} />
									<DeleteOutlined onClick={() => OrderService.deleteOrder(order)} />
								</div>
							</div>
						))}
					</div>
				</Panel>
			</Collapse>
			<Modal title='Edit Order Status' visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<form className='d-flex flex-column'>
					<div className='form-group'>
						<label htmlFor='_id'>Order ID</label>
						<input type='text' className='form-control' id='_id' name='_id' value={formData._id} readOnly />
					</div>
					<div className='form-group'>
						<label htmlFor='status'>Status</label>
						<input type='text' className='form-control' id='status' name='status' value={formData.status} onChange={onChange} />
					</div>
				</form>
			</Modal>
		</div>
	);
};

export default AdminOrders;
