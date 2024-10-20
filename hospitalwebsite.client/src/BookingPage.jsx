import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState, useEffect, useRef } from 'react';

function BookingPage() {

    return (

        <div class="clinic_version">

            <div class="services" style={{ background: 'images/service-bg.png', marginTop: '100px' }}>
                <div class="col-lg-4" style={{ marginLeft: '33%' }}>
                    <div class="appointment-form">
                        <h3><span>+</span> Book Appointment</h3>
                        <form action="#" class="form">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group">
                                        <input type="text" id="name" placeholder="Your Name" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group">
                                        <input type="text" placeholder="Phone Number" id="phone" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 select-section">
                                <div class="row">
                                    <div class="form-group">
                                        <select class="form-control">
                                            <option>Day</option>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select class="form-control">
                                            <option>Time</option>
                                            <option>AM</option>
                                            <option>PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group">
                                        <select class="form-control">
                                            <option>Doctor Name</option>
                                            <option>Mr.XYZ</option>
                                            <option>Mr.ABC</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group">
                                        <textarea rows="4" id="textarea_message" class="form-control" placeholder="Your Message..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group">
                                        <div class="center"><button type="submit">Submit</button></div>
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