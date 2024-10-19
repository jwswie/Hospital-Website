import './css/schedule-style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AppointmentPage() {
    const [appointments, setAppointments] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('/api/Appointments')
            .then(response => {
                setAppointments(response.data);
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
    }, []);

    const getServiceName = (serviceID) => {
        const service = services.find(s => s.serviceID === serviceID);
        return service.serviceName;
    }

    const getTimeNumeric = (time) => {
        if (!time) return 0;

        const [hour] = time.split(/(AM|PM)/i);
        let numericHour = parseInt(hour, 10);

        if (isNaN(numericHour)) return 0;

        return numericHour;
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
                <div className="day mon">
                    <div className="date">
                        <p className="date-num">21</p>
                        <p className="date-day">Mon</p>
                    </div>
                    <div className="events">
                        {Array.isArray(appointments) && appointments
                            .filter(appointment => appointment.appointmentDay === 'Monday')
                            .map((appointment, index) => {
                                const startHour = getTimeNumeric(appointment.timeFrom);
                                const endHour = getTimeNumeric(appointment.timeTo);
                                const serviceName = getServiceName(appointment.serviceID);

                                return (
                                    <div key={index} className={`event start-${startHour} end-${endHour} securities`}
                                        title={serviceName} >
                                        <p className="title">{serviceName}</p>
                                        <p className="time">{appointment.timeFrom} - {appointment.timeTo}</p>
                                    </div>
                                );
                            })}

                    </div>
                </div>

                <div className="day tues">
                    <div className="date">
                        <p className="date-num">22</p>
                        <p className="date-day">Tues</p>
                    </div>
                    <div className="events">
                        <div className="events">
                            {Array.isArray(appointments) && appointments
                                .filter(appointment => appointment.appointmentDay === 'Tuesday')
                                .map((appointment, index) => {
                                    const startHour = getTimeNumeric(appointment.timeFrom);
                                    const endHour = getTimeNumeric(appointment.timeTo);
                                    const serviceName = getServiceName(appointment.serviceID);

                                    return (
                                        <div key={index} className={`event start-${startHour} end-${endHour} securities`}
                                            title={serviceName} >
                                            <p className="title">{serviceName}</p>
                                            <p className="time">{appointment.timeFrom} - {appointment.timeTo}</p>
                                        </div>
                                    );
                                })}

                        </div>
                    </div>
                </div>

                <div className="day wed">
                    <div className="date">
                        <p className="date-num">23</p>
                        <p className="date-day">Wed</p>
                    </div>
                    <div className="events">
                        {Array.isArray(appointments) && appointments
                            .filter(appointment => appointment.appointmentDay === 'Wednesday')
                            .map((appointment, index) => {
                                const startHour = getTimeNumeric(appointment.timeFrom);
                                const endHour = getTimeNumeric(appointment.timeTo);
                                const serviceName = getServiceName(appointment.serviceID);

                                return (
                                    <div key={index} className={`event start-${startHour} end-${endHour} securities`}
                                        title={serviceName} >
                                        <p className="title">{serviceName}</p>
                                        <p className="time">{appointment.timeFrom} - {appointment.timeTo}</p>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="day thurs">
                    <div className="date">
                        <p className="date-num">24</p>
                        <p className="date-day">Thurs</p>
                    </div>
                    <div className="events">
                        {Array.isArray(appointments) && appointments
                            .filter(appointment => appointment.appointmentDay === 'Thursday')
                            .map((appointment, index) => {
                                const startHour = getTimeNumeric(appointment.timeFrom);
                                const endHour = getTimeNumeric(appointment.timeTo);
                                const serviceName = getServiceName(appointment.serviceID);

                                return (
                                    <div key={index} className={`event start-${startHour} end-${endHour} securities`}
                                        title={serviceName} >
                                        <p className="title">{serviceName}</p>
                                        <p className="time">{appointment.timeFrom} - {appointment.timeTo}</p>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="day fri">
                    <div className="date">
                        <p className="date-num">25</p>
                        <p className="date-day">Fri</p>
                    </div>
                    <div className="events">
                        {Array.isArray(appointments) && appointments
                            .filter(appointment => appointment.appointmentDay === 'Friday')
                            .map((appointment, index) => {
                                const startHour = getTimeNumeric(appointment.timeFrom);
                                const endHour = getTimeNumeric(appointment.timeTo);
                                const serviceName = getServiceName(appointment.serviceID);

                                return (
                                    <div key={index} className={`event start-${startHour} end-${endHour} securities`}
                                        title={serviceName} >
                                        <p className="title">{serviceName}</p>
                                        <p className="time">{appointment.timeFrom} - {appointment.timeTo}</p>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentPage;
