import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
    return (
        <div className="clinic_version">
            <div class="container" style={{ marginTop: '150px' }}>
                <div className="heading">
                    <img src="images/icon-logo.png" alt="icon-logo"></img>
                    <h2>Your Cart</h2>
                </div>
                <div class="row mb-5">
                    <form class="col-md-12" method="post">
                        <div class="site-blocks-table">
                            <table class="table table-bordered" style={{color: '#000'} }>
                                <thead>
                                    <tr>
                                        <th class="product-thumbnail">Image</th>
                                        <th class="product-name">Product</th>
                                        <th class="product-price">Price</th>
                                        <th class="product-quantity">Quantity</th>
                                        <th class="product-total">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="product-thumbnail">
                                            <img src="images/product_02.png" alt="Image" class="img-fluid"></img>
                                        </td>
                                        <td class="product-name">
                                            <h2 class="h5 text-black">Ibuprofen</h2>
                                        </td>
                                        <td>$55.00</td>
                                        <td>
                                            <div class="input-group mb-3" style={{ maxWidth: '120px', left: '80px' }}>
                                                <input type="text" class="form-control text-center" value="1" />
                                            </div>

                                        </td>
                                        <td>$49.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>

                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-12 text-left border-bottom mb-5">
                                    <h3 style={{ float: 'left', background: 'none', color: '#000', fontSize: '20px' }}>Cart Totals</h3>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <span>Subtotal</span>
                                </div>
                                <div class="col-md-6 text-right">
                                    <strong>$230.00</strong>
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="col-md-6">
                                    <span>Total</span>
                                </div>
                                <div class="col-md-6 text-right">
                                    <strong>$230.00</strong>
                                </div>
                            </div>

                            <div class="row" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <div class="col-md-12">
                                    <Link to="/home"><a href="#" className="btn-light btn-brd effect-1">Proceed
                                        To
                                        Checkout</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CartPage;