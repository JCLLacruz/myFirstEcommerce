import axios from 'axios';

const API_URL = 'http://localhost:3001';

const createOrder = async (cart) => {
    const token = localStorage.getItem('token');
    try {
        const res = await axios.post(API_URL + '/orders/',{ProductIds:cart},{
            headers: {
                Authorization: token,
            }
        })
    } catch (error) {
        console.error(error);
    }
}
const getAllOrders = async () => {
    const token = localStorage.getItem('token');
    try {
        const res = await axios.get(API_URL + '/orders/',{
            headers: {
                Authorization: token,
            }
        })
        return res.data;
    } catch (error) {
        console.error(error);
    }
}
const updateOrder = async (order) => {
    const token = localStorage.getItem('token');
    try {
        const res = await axios.put(API_URL + '/orders/id/'+ order._id,order, {
            headers: {
                Authorization: token,
            }
        })
        return res.data;
    } catch (error) {
        console.error(error);
    }
}
const deleteOrder = async (orderId) => {
    const token = localStorage.getItem('token');
    try {
        const res = await axios.delete(API_URL + '/orders/id/'+ orderId, {
            headers: {
                Authorization: token,
            }
        })
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

const OrderService = {
    createOrder,
    getAllOrders,
    updateOrder,
    deleteOrder
}

export default OrderService;