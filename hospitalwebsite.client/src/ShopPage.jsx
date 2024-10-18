import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/order-style.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function ShopPage() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchActive, setSearchActive] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSearchOpen = (e) => {
        e.preventDefault();
        setSearchActive(true);
        setTimeout(() => {
            const input = document.querySelector('.search-wrap .form-control');
            if (input) {
                input.focus();
            }
        }, 300);
    };

    const handleSearchClose = (e) => {
        e.preventDefault();
        setSearchActive(false);
    };

    return (
        <div className="clinic_version">
            <div className="container" style={{ marginTop: '200px', marginBottom: '20px' }}>
                <div className="row">

                    <div className="col-lg-6">
                        <h2 style={{ fontSize: '30px' }}>Filter by Reference</h2>
                        <button type="button" style={{ fontSize: '20px' }} className="btn btn-secondary btn-md dropdown-toggle px-4" onClick={toggleDropdown} > Reference </button>
                        {dropdownOpen && (
                            <div className="dropdown-menu show" aria-labelledby="dropdownMenuReference" style={{ fontSize: '15px', marginLeft: '10px' }}>
                                <a className="dropdown-item" href="#">Relevance</a>
                                <a className="dropdown-item" href="#">Name, A to Z</a>
                                <a className="dropdown-item" href="#">Name, Z to A</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Price, low to high</a>
                                <a className="dropdown-item" href="#">Price, high to low</a>
                            </div>
                        )}
                    </div>

                    <div className="col-lg-6">
                        <div className="site-navbar" style={{ paddingTop: '0.5rem' }}>
                            <div className={`search-wrap ${searchActive ? 'active' : ''}`}>
                                <a href="#" className="search-close js-search-close" onClick={handleSearchClose}>
                                    <span className="fa fa-close"></span>
                                </a>
                                <form action="#" method="post">
                                    <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
                                </form>
                            </div>
                            <h2 style={{ fontSize: '30px' }}>Search by Name</h2>
                            <a href="#" className="icons-btn js-search-open" onClick={handleSearchOpen}>
                                <span className="fa fa-search"></span>
                            </a>
                        </div>
                    </div>


                </div>

                <div className="row">
                    <div className="col-lg-4 item" style={{ textAlign: 'center' }}>
                        <a href=""> <img src="images/product_01.png" alt="Image" /></a>
                        <h3 className="text-dark">Bioderma</h3>
                        <p className="price">$55.00</p>
                    </div>
                    <div className="col-lg-4 item" style={{ textAlign: 'center' }}>
                        <a href=""> <img src="images/product_02.png" alt="Image" /></a>
                        <h3 className="text-dark">Chanca Piedra</h3>
                        <p className="price">$70.00</p>
                    </div>
                    <div className="col-lg-4 item" style={{ textAlign: 'center' }}>
                        <a href=""> <img src="images/product_03.png" alt="Image" /></a>
                        <h3 className="text-dark">Umcka Cold Care</h3>
                        <p className="price">$120.00</p>
                    </div>

                    <div className="col-lg-4 item" style={{ textAlign: 'center' }}>
                        <a href=""> <img src="images/product_04.png" alt="Image" /></a>
                        <h3 className="text-dark">Cetyl Pure</h3>
                        <p className="price">$20.00</p>
                    </div>
                    <div className="col-lg-4 item" style={{ textAlign: 'center' }}>
                        <a href=""> <img src="images/product_05.png" alt="Image" /></a>
                        <h3 className="text-dark">CLA Core</h3>
                        <p className="price">$38.00</p>
                    </div>
                    <div className="col-lg-4 item" style={{ textAlign: 'center' }}>
                        <a href=""> <img src="images/product_06.png" alt="Image" /></a>
                        <h3 className="text-dark">Poo Pourri</h3>
                        <p className="price">$38.00</p>
                    </div>
                </div>

                <div className="col-md-12" style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <div className="site-block-27">
                        <ul>
                            <li><a href="#">&lt;</a></li>
                            <li className="active"><span>1</span></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">&gt;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopPage;