import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function ServisePage() {

    return (

        <div className="clinic_version">

            <div className="container" style={{ marginTop: '185px', marginBottom: '100px' }}>
                <div className="heading">
                    <img src="images/icon-logo.png" alt="icon-logo"></img>
                    <h2>Our Services</h2>
                </div>
                <div className="servise-row g-4">
                    <div className="col-lg-4">
                        <div className="service-item bg-light p-5">
                            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                                <i className="fa fa-heartbeat text-primary fs-4"></i>
                            </div>
                            <h4>Cardiology</h4>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem.</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3" style={{ marginLeft: '2px' }}></i>Appointment</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-item bg-light p-5">
                            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                                <i className="fa fa-x-ray text-primary fs-4"></i>
                            </div>
                            <h4>Pulmonary</h4>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3" style={{ marginLeft: '2px' }}></i>Appointment</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-item bg-light p-5">
                            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                                <i className="fa fa-brain text-primary fs-4"></i>
                            </div>
                            <h4>Neurology</h4>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3" style={{ marginLeft: '2px' }}></i>Appointment</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-item bg-light p-5">
                            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                                <i className="fa fa-wheelchair text-primary fs-4"></i>
                            </div>
                            <h4>Orthopedics</h4>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3" style={{ marginLeft: '2px' }}></i>Appointment</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-item bg-light p-5">
                            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                                <i className="fa fa-tooth text-primary fs-4"></i>
                            </div>
                            <h4>Dental Surgery</h4>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3" style={{ marginLeft: '2px' }}></i>Appointment</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-item bg-light p-5">
                            <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                                <i className="fa fa-vials text-primary fs-4"></i>
                            </div>
                            <h4>Laboratory</h4>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3" style={{ marginLeft: '2px' }}></i>Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServisePage;