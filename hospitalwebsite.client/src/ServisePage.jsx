import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ServisePage() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('/api/Services')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div className="clinic_version">
            <div className="container" style={{ marginTop: '185px', marginBottom: '100px' }}>
                <div className="heading">
                    <img src="images/icon-logo.png" alt="icon-logo"></img>
                    <h2>Our Services</h2>
                </div>
                <div className="row g-4">
                    {Array.isArray(services) && services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="service-item bg-light p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                                    <i className="fa fa-user-md text-primary fs-4"></i>
                                </div>
                                <h4>{service.serviceName}</h4>
                                <p>{service.serviceDescription}</p>
                                <Link to={{ pathname: '/booking' }} state={{ serviceName: service.serviceName }}>
                                    <button className="btn" style={{ fontSize: '15px' }}>
                                        <i className="fa fa-plus text-primary me-3" style={{ marginLeft: '5px' }}></i>Appointment
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServisePage;
