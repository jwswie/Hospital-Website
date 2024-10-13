import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/custom.css';
import React, { useState, useEffect } from 'react';

function DoctorPage() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {

        const fetchDoctors = async () => {
            try {
                const response = await fetch("/api/Doctors");
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };

        fetchDoctors();
    }, []); 

    return (
        <div className="clinic_version">
            <div className="container">
                <div className="heading">
                    <img src="images/icon-logo.png" alt="Logo" />
                    <h2>Our Doctors</h2>
                </div>

                <div className="dev-list text-center">
                    <div className="row">
                        {doctors.map((doctor) => (
                            <div className="col-lg-4" key={doctor.doctorID}>
                                <div className="widget">
                                    <img src={`images/doctor_02.jpg`} alt="doctor-image" className="img-responsive" />
                                    <div className="widget-title">
                                        <h3>{doctor.doctorName}</h3>
                                        <small>{doctor.doctorSpecialty}</small>
                                    </div>
                                    <p>{doctor.greetings}</p>

                                    <a href="#" className="btn grd1"><i className="fa fa-facebook"></i></a>
                                    <a href="#" className="btn grd1"><i className="fa fa-github"></i></a>
                                    <a href="#" className="btn grd1"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="btn grd1"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorPage;