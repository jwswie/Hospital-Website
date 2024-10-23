import './css/schedule-style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AppointmentPage({ user }) {
    const [appointments, setAppointments] = useState([]);
    const [services, setServices] = useState([]);

    console.log('User: ' + user);

    useEffect(() => {
        if (user) {
            axios.get('/api/Appointments')
                .then(response => {
                    const userAppointments = response.data.filter(appointment => appointment.userID === user.userID);
                    setAppointments(userAppointments);
                })
                .catch(error => {
                    console.error('Error fetching appointments: ', error);
                });

            axios.get('/api/Services')
                .then(response => {
                    setServices(response.data);
                })
                .catch(error => {
                    console.error('Error fetching services: ', error);
                });
        }
    }, [user]);

    const getServiceName = (serviceID) => {
        const service = services.find(s => s.serviceID === serviceID);
        return service ? service.serviceName : '';
    };

    const getTimeNumeric = (time) => {
        if (!time) return 0;
        const [hour] = time.split(/(AM|PM)/i);
        let numericHour = parseInt(hour, 10);
        return isNaN(numericHour) ? 0 : numericHour;
    };

    return (
        <div className="calendar" style={{ marginTop: '150px' }}>
            <div className="timeline">
                <div className="spacer"></div>
                <div className="time-marker">9 AM</div>
                <div className="time-marker">10 AM</div>
                <div className="time-marker">11 AM</div>
                <div className="time-marker">12 PM</div>
                <div className="time-marker">1 PM</div>
                <div className="time-marker">2 PM</div>
                <div className="time-marker">3 PM</div>
                <div className="time-marker">4 PM</div>
                <div className="time-marker">5 PM</div>
                <div className="time-marker">6 PM</div>
            </div>

            <div className="days">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                    <div className={`day ${day.toLowerCase()}`} key={day}>
                        <div className="date">
                            <p className="date-day">{day.slice(0, 3)}</p>
                        </div>
                        <div className="events">
                            {appointments.filter(appointment => appointment.appointmentDay === day)
                                .map((appointment, index) => {
                                    const startHour = getTimeNumeric(appointment.timeFrom);
                                    const endHour = getTimeNumeric(appointment.timeTo);
                                    const serviceName = getServiceName(appointment.serviceID);

                                    return (
                                        <div key={index} className={`event start-${startHour} end-${endHour} securities`} title={serviceName}>
                                            <p className="title">{serviceName}</p>
                                            <p className="time">{appointment.timeFrom} - {appointment.timeTo}</p>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AppointmentPage;
