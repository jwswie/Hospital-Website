import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/FontStyle.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {

    return (
        <div className="clinic_version">

            <div className="section" style={{ marginTop: '200px' }}>
                <div className="text-center">
                    <span className="icon-check_circle text-success" style={{ fontSize: '80px' }}></span>
                    <h2 className="text-black" style={{ fontSize: '70px' }}>All Done!</h2>
                    <p style={{ marginBottom: '50px' }}>Your appointment was successfuly booked</p>
                    <Link to="/"><a href="#" className="btn-light btn-brd effect-1">Back to Home</a></Link>
                </div>
            </div>
        </div>
    );
}

export default SuccessPage;