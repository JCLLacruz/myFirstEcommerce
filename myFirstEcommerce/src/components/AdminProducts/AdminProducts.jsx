import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { ProductContext } from '../../context/ProductContext/ProductState';
import { Collapse, notification, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './AdminProducts.scss';

const { Panel } = Collapse;

const AdminProducts = () => {
    const initialValue = {
        _id: '',
        productName: '',
        description: '',
        price: 0,
    };
    const [formData, setFormData] = useState(initialValue);
    const { user } = useContext(UserContext);
    const { products, getAll, updateProduct, deleteProduct } = useContext(ProductContext);
    const [api, contextHolder] = notification.useNotification();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [btnDisabledNext, setBtnDisabledNext] = useState(false);
    const [btnDisabledPrev, setBtnDisabledPrev] = useState(true);

    const showModal = (product) => {
        setIsModalOpen(true);
        setFormData(product);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        updateProduct(formData);
    };

    const openNotification = (product, message) => {
        api.open({
            message,
            icon: (
                <div>
                    <ShoppingCartOutlined
                        style={{
                            color: '#108ee9',
                        }}
                    />
                    <img
                        alt={`pokemon ${product.productName}`}
                        src={product.image_path}
                        style={{
                            width: 200,
                        }}
                    />
                </div>
            ),
        });
    };

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const nextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setPage((prevPage) => prevPage - 1);
    };

    useEffect(() => {
        getAll(page);
        setBtnDisabledPrev(page === 1);
        setBtnDisabledNext(products.length < 10);
    }, [page, products.length]);

    return (
        <div id='adminConsoleDiv'>
            <h1>{user.firstname}, you are the Administrator of the shop.</h1>
            <Collapse defaultActiveKey={['1']}>
                <Panel header={<h2>Admin database Products</h2>} key='1'>
                    <div className='d-flex flex-column justify-content-center'>
                        <div className='d-flex flex-wrap gap-2'>
                            {products.map((product) => (
                                <div key={product._id}>
                                    <div>
                                        <img className='imgAdminList' src={product.image_path} alt={product.productName} />
                                    </div>
                                    <div>
                                        <h4>{product.productName}</h4>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <EditOutlined onClick={() => showModal(product)} />
                                        <DeleteOutlined
                                            onClick={() => {
                                                deleteProduct(product._id);
                                                const message = `${product.productName} was deleted from the database`;
                                                openNotification(product, message);
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div id='btnDiv' className='d-flex gap-5 mt-3'>
                            <button className='btn btn-primary' onClick={prevPage} disabled={btnDisabledPrev}>
                                Prev
                            </button>
                            <button className='btn btn-primary' onClick={nextPage} disabled={btnDisabledNext}>
                                Next
                            </button>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <Modal title='Edit Product' visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form>
                    <div className='form-group'>
                        <label>Product Name</label>
                        <input
                            type='text'
                            className='form-control'
                            name='productName'
                            value={formData.productName}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <input
                            type='text'
                            className='form-control'
                            name='description'
                            value={formData.description}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Price</label>
                        <input
                            type='number'
                            className='form-control'
                            name='price'
                            value={formData.price}
                            onChange={onChange}
                        />
                    </div>
                </form>
            </Modal>
            {contextHolder}
        </div>
    );
};

export default AdminProducts;
