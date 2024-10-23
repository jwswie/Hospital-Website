import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookingPage({ user }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { serviceName } = location.state || {};

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [appointments, setAppointments] = useState([]);
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [selectedDay, setSelectedDay] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [message, setMessage] = useState('');

    const possibleTimes = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];

    useEffect(() => {
        axios.get('/api/Doctors')
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => {
                console.error('Error fetching doctors: ', error);
            });
    }, []);

    useEffect(() => {
        axios.get('/api/Services')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('Error fetching services: ', error);
            });

        axios.get('/api/Appointments')
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.error('Error fetching appointments: ', error);
            });
    }, []);

    useEffect(() => {
        if (user) {
            setName(user.userName);
            setPhone(user.phoneNumber);
        }
    }, [user]);

    const handleDayChange = (e) => {
        const day = e.target.value;
        setSelectedDay(day);

        const occupiedTimes = appointments
            .filter(appointment => appointment.appointmentDay === day)
            .map(appointment => appointment.timeFrom);

        const newAvailableTimes = possibleTimes.filter(time => !occupiedTimes.includes(time));
        setAvailableTimes(newAvailableTimes);
    };

    useEffect(() => {
        if (serviceName && services.length > 0) {
            const selectedService = services.find(service => service.serviceName === serviceName);
            if (selectedService) {
                const doctor = doctors.find(doctor => doctor.doctorID === selectedService.doctorID);
                if (doctor) {
                    setSelectedDoctor(doctor.doctorName);
                }
            }
        }
    }, [serviceName, services, doctors]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedDay && selectedTime) {
            const selectedService = services.find(service => service.serviceName === serviceName);
            const serviceID = selectedService ? selectedService.serviceID : null;
            const timeFrom = selectedTime;
            const timeTo = getNextTime(selectedTime);

            const appointmentData = {
                serviceID: serviceID,
                userID: user.userID,
                timeFrom: timeFrom,
                timeTo: timeTo,
                appointmentDay: selectedDay,
            };

            axios.post('/api/Appointments', appointmentData)
                .then(response => {
                    console.log('Appointment booked successfully', response.data);
                    navigate('/success', { state: { message: 'Your appointment has been booked!', message2: 'Success!' } });
                })
                .catch(error => {
                    console.error('Error booking appointment:', error);
                });
        } else {
            alert('Please select a day and time for your appointment.');
        }
    };

    const getNextTime = (time) => {
        const timeIndex = possibleTimes.indexOf(time);
        if (timeIndex !== -1 && timeIndex < possibleTimes.length - 1) {
            return possibleTimes[timeIndex + 1];
        }
        return '';
    };

    return (
        <div className="clinic_version">
            <div className="services" style={{ background: 'images/service-bg.png', marginTop: '100px' }}>
                <div className="col-lg-4" style={{ marginLeft: '33%' }}>
                    <div className="appointment-form">
                        <h3><span>+</span> Book Appointment</h3>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input type="text" id="name" placeholder="Your Name" value={name} readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input type="text" placeholder="Phone Number" id="phone" value={phone} readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="form-group">
                                        <input type="text" placeholder="Service Name" value={serviceName || ''} readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 select-section">
                                <div className="row">
                                    <div className="form-group">
                                        <select className="form-control" onChange={handleDayChange}>
                                            <option>Day</option>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" onChange={(e) => setSelectedTime(e.target.value)}>
                                            <option>Time</option>
                                            {availableTimes.map((time, index) => (
                                                <option key={index} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="form-group">
                                        <select className="form-control" value={selectedDoctor} readOnly>
                                            <option>{selectedDoctor || 'Doctor Name'}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="form-group">
                                        <textarea rows="4" id="textarea_message" className="form-control" placeholder="Your Message..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="form-group">
                                        <div className="center">
                                            <button type="submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingPage;