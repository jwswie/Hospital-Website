import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {

    return (

        <div className="clinic_version">

            <div className="section" style={{ marginTop: '100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex flex-column">
                                <img style={{ width: '75%', alignSelf: 'flex-end' }} src="images/about_01.jpg" alt="about-image"></img>
                                <img className='AboutImage' src="images/about_02.jpg" alt="about-image"></img>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h1>Why You Should Trust Us? Get Know About Us!</h1>
                            <p>Your health is our priority. With a dedicated team of experienced doctors, modern facilities, and a commitment to patient-centered care, we strive to provide the highest level of medical services</p>
                            <p>Our hospital is equipped with the latest technology, ensuring accurate diagnostics and effective treatments. We believe in transparent communication, personalized care, and building trust with every patient. When you choose us, you're not just getting healthcare - you’re becoming part of a community that truly cares. Your well-being is in safe hands</p>
                            <p><i className="fa fa-check-circle" style={{ color: '#157fda' }}></i> Quality health care</p>
                            <p><i className="fa fa-check-circle" style={{ color: '#157fda' }}></i> Only Qualified Doctors</p>
                            <p><i className="fa fa-check-circle" style={{ color: '#157fda' }}></i> Medical Research Professionals</p>
                        </div>
                    </div>

                    <hr className="hr1"></hr>

                    <div className="bg-primary overflow-hidden my-5">

                        <div className="row">
                            <div style={{ flex: '0 0 auto', width: '50%', paddingTop: '3rem', paddingBottom: '3rem' }}>
                                <div style={{ padding: '3rem', marginLeft: '20px' }}>
                                    <h1 style={{ color: 'white' }}>Why Choose Us</h1>
                                    <p>At our hospital, your health is our top priority. With experienced doctors, state-of-the-art technology, and personalized care, we are committed to providing the best possible treatment. Our compassionate staff ensures you feel supported every step of the way. Trust us for high-quality, patient-centered care</p>

                                    <div className="row">
                                        <div className="col-6">
                                            <div className="d-flex">
                                                <div className="align-items-center justify-content-center rounded-circle bg-light"
                                                    style={{ width: '55px', height: '55px' }}>
                                                    <i className="fa fa-user-md icon"></i>
                                                </div>
                                                <div className="about-text">
                                                    <p className="text-white mb-2">Experience</p>
                                                    <h5 className="text-white mb-0">Doctors</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex">
                                                <div className="align-items-center justify-content-center rounded-circle bg-light"
                                                    style={{ width: '55px', height: '55px' }}>
                                                    <i className="fa fa-check icon"></i>
                                                </div>
                                                <div className="about-text">
                                                    <p className="text-white mb-2">Quality</p>
                                                    <h5 className="text-white mb-0">Services</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex">
                                                <div className="align-items-center justify-content-center rounded-circle bg-light"
                                                    style={{ width: '55px', height: '55px' }}>
                                                    <i className="fa fa-user-md icon"></i>
                                                </div>
                                                <div className="about-text">
                                                    <p className="text-white mb-2">Positive</p>
                                                    <h5 className="text-white mb-0">Consultation</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex">
                                                <div className="align-items-center justify-content-center rounded-circle bg-light"
                                                    style={{ width: '55px', height: '55px' }}>
                                                    <i className="fa fa-headphones icon"></i>
                                                </div>
                                                <div className="about-text">
                                                    <p className="text-white mb-2">24 Hours</p>
                                                    <h5 className="text-white mb-0">Support</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{ position: 'relative' }}>
                                    <img src="images/about_03.jpg" style={{ objectFit: 'cover', position: 'absolute' }} alt="about-image"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutPage;