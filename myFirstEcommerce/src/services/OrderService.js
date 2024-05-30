import axios from 'axios';

const API_URL = 'https://serverecommerce-w9o2.onrender.com';

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

const OrderService = {
    createOrder,
    getAllOrders
}

export default OrderService;