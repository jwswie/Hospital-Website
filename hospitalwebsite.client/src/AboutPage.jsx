import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {

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
              <li><a><Link to="/">Home</Link></a></li>
              <li className="active"><a href="#about"><Link to="/about">About Us</Link></a></li>
              <li><a href="#service">Servises</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#schedule">Appointments</a></li>
              <li><a href="#order">Order Medicine</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#login" style={{ left: '25px' }}>Log In</a></li>
            </ul>
          </div>
          
        </div>
      </nav>



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

export default AboutPage;