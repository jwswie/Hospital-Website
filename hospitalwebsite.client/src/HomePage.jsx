import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

    return (

        <div className="clinic_version">

            <div className="section" style={{ marginTop: '100px' }}>
                <div className="container">
                    <div className="heading">
                        <img src="https://hospitalblobstorage.blob.core.windows.net/images/icon-logo.png" alt="icon-logo"></img>
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
                                <Link to="/about"><a href="" className="btn-light btn-brd effect-1">Learn More</a></Link>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src="https://hospitalblobstorage.blob.core.windows.net/images/home_about.png" alt="about-image" className="img-responsive"></img>
                        </div>
                    </div>

                    <hr className="hr1"></hr>

                    <div className="col-md-3">
                        <div className="service-widget">
                            <img src="https://hospitalblobstorage.blob.core.windows.net/images/clinic_01.jpg" alt="clinic-photo" className="img-responsive"></img>
                            <h3>Digital Control Center</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-widget">
                            <img src="https://hospitalblobstorage.blob.core.windows.net/images/clinic_02.jpg" alt="clinic-photo" className="img-responsive"></img>
                            <h3>Hygienic Operating Room</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-widget">
                            <img src="https://hospitalblobstorage.blob.core.windows.net/images/clinic_03.jpg" alt="clinic-photo" className="img-responsive"></img>
                            <h3>Specialist Physicians</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="service-widget">
                            <img src="https://hospitalblobstorage.blob.core.windows.net/images/clinic_04.jpg" alt="clinic-photo" className="img-responsive"></img>
                            <h3>Comfortable Rooms</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;