import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {

    return (
        <div className="clinic_version">

            <nav className="navbar navbar-custom navbar-fixed-top">
                <div className="top-area">
                    <div className="container">
                        <div className="col-sm-6">
                            <p>Monday - Saturday, 8am to 10pm </p>
                        </div>
                        <div className="col-sm-6">
                            <p className="text-right">Call us now (+1) 234 567 890</p>
                        </div>
                    </div>
                </div>

                <div className="container navigation">

                    <a className="navbar-brand" href="index.html" style={{ marginTop: '5px' }}> <img src="images/logo.png" alt="" width="150" height="40" /> </a>

                    <div className="navbar-collapse navbar-right">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#service">Servises</a></li>
                            <li><a href="#doctors">Doctors</a></li>
                            <li><a href="#schedule">Appointment schedule</a></li>
                            <li><a href="#order">Order Medicine</a></li>
                            <li><a href="#login" style={{ left: '35px' }}>Log In</a></li>
                        </ul>
                    </div>

                </div>
            </nav>

            <div className="section" style={{ marginTop: '100px' }}>
                <div className="container">
                    <div className="heading">
                        <img src="images/icon-logo.png" alt="icon-logo"></img>
                        <h2>The Specialist Clinic</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="message-box">
                                <h4>WHAT WE DO</h4>
                                <h2>Clinic Service</h2>
                                <p>At our clinic, we are dedicated to providing comprehensive and personalized healthcare to meet the needs of
                                    each patient. Our team of highly qualified doctors, nurses, and medical staff work together to offer a wide
                                    range of services, from preventive care and routine check-ups to specialized treatments and diagnostics</p>
                                <p> With state-of-the-art equipment and a commitment to excellence, we ensure that every patient receives
                                    the best possible care in a comfortable and compassionate environment. Your health is our top priority,
                                    and we are here to support you every step of the way </p>
                                <a href="#" data-scroll className="btn-light btn-brd effect-1">Learn More</a>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src="images/home_about.png" alt="about-image" className="img-responsive"></img>
                        </div>
                    </div>

                    <hr className="hr1"></hr>

                    <div className="col-md-3">
                        <div className="service-widget">
                            <img src="images/clinic_01.jpg" alt="clinic-photo" className="img-responsive"></img>
                            <h3>Digital Control Center</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-widget">
                            <img src="images/clinic_02.jpg" alt="clinic-photo" className="img-responsive"></img>
                            <h3>Hygienic Operating Room</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-widget">
                            <img src="images/clinic_03.jpg" alt="clinic-photo" className="img-responsive"></img>
                            <h3>Specialist Physicians</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-widget">
                            <img src="images/clinic_04.jpg" alt="clinic-photo" className="img-responsive"></img>
                            <h3>Comfortable Rooms</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="col-md-8">
                        <p>© 2024 Lifecare. All Rights Reserved</p>
                    </div>
                    <div className="col-md-4">
                        <p><i className="fa fa-phone"></i> (+1) 234 567 890</p>
                        <p><i className="fa fa-paper-plane"></i> info@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;