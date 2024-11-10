import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CartPage({ user }) {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/Orders')
            .then(response => {
                const userOrders = response.data.filter(order => order.userID === user.userID);
                if (userOrders.length === 0) {
                    navigate('/success', { state: { message2: 'You don\'t have any orders!', message: 'Go and search in the shop' } });
                } else {
                    setOrders(userOrders);
                }
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [user.userID, navigate]);

    const deleteOrder = async (orderID) => {
        try {
            await axios.delete(`/api/Orders/${orderID}`);
            setOrders(prevOrders => prevOrders.filter(order => order.orderID !== orderID));
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    const updateOrderQuantity = async (orderID, newQuantity) => {
        try {
            await axios.put(`/api/Orders/${orderID}`, { orderID, quantity: newQuantity });

        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handleQuantityChange = (orderID, newQuantity) => {
        if (newQuantity <= 0) {
            deleteOrder(orderID);
        } else {
            setOrders(prevOrders =>
                prevOrders.map(order => order.orderID === orderID ? { ...order, quantity: newQuantity } : order)
            );
            updateOrderQuantity(orderID, newQuantity);
        }
    };

    const handleInputChange = (e, orderID) => {
        const newQuantity = parseInt(e.target.value, 10);
        handleQuantityChange(orderID, isNaN(newQuantity) ? 1 : newQuantity);
    };

    const calculateTotal = () => {
        return orders.reduce((acc, item) => acc + (item.medicine?.medicinePrice * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="clinic_version">
            <div className="container" style={{ marginTop: '150px' }}>
                <div className="heading">
                    <img src="images/icon-logo.png" alt="icon-logo"></img>
                    <h2>Your Cart</h2>
                </div>
                <div className="row mb-5">
                    <form className="col-md-12" method="post">
                        <div className="site-blocks-table">
                            <table className="table table-bordered" style={{ color: '#000' }}>
                                <thead>
                                    <tr>
                                        <th className="product-thumbnail">Image</th>
                                        <th className="product-name">Product</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-total">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(orders) && orders.map((item) => (
                                        <tr key={item.orderID}>
                                            <td className="product-thumbnail">
                                                <img src={item.medicine?.medicinePhoto} alt={item.medicine?.medicineName} className="img-fluid" />
                                            </td>
                                            <td className="product-name">
                                                <h2 className="h5 text-black">{item.medicine?.medicineName}</h2>
                                            </td>
                                            <td>${item.medicine?.medicinePrice.toFixed(2)}</td>

                                            <td className="product-quantity text-center">
                                                <div className="input-group justify-content-center" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <button className="btn btn-outline-secondary" type="button" style={{ backgroundColor: '#157fda', color: '#fff', height: '34px', borderRadius: '0px' }} onClick={() => handleQuantityChange(item.orderID, item.quantity - 1)}>-</button>
                                                    <input type="number" className="form-control text-center" min="0" value={item.quantity} readOnly style={{ maxWidth: '60px' }} onChange={(e) => handleInputChange(e, item.orderID)} />
                                                    <button className="btn btn-outline-secondary" type="button" style={{ backgroundColor: '#157fda', color: '#fff', height: '34px', borderRadius: '0px' }} onClick={() => handleQuantityChange(item.orderID, item.quantity + 1)}>+</button>
                                                </div>
                                            </td>
                                            <td>${(item.medicine?.medicinePrice * item.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-7" style={{ color: '#000' }}>
                            <div className="row">
                                <div className="col-md-12 text-left border-bottom mb-5">
                                    <h3 style={{ float: 'left', background: 'none', color: '#000', fontSize: '25px', borderBottom: '1px solid #dee2e6' }}>Cart Totals</h3>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <span>Subtotal</span>
                                </div>
                                <div className="col-md-6 text-right">
                                    <strong>${calculateTotal()}</strong>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md-6">
                                    <span>Total</span>
                                </div>
                                <div className="col-md-6 text-right">
                                    <strong>${calculateTotal()}</strong>
                                </div>
                            </div>

                            <div className="row" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <div className="col-md-12">
                                    <Link to="/checkout">
                                        <button className="btn btn-light btn-brd effect-1">Proceed To Checkout</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;