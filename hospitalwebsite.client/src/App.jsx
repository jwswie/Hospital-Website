import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import DoctorPage from './DoctorPage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import AppointmentPage from './AppointmentPage';
import ServisePage from './ServisePage';
import ShopPage from './ShopPage';
import BookingPage from './BookingPage';
import SuccessPage from './SuccessPage';
import ProfilePage from './ProfilePage';

function App() {
    const location = useLocation();
    const [user, setUser] = useState(null);

    return (
        <div className="App">
            <nav className="navbar navbar-custom navbar-fixed-top">
                <div className="top-area">
                    <div className="container">
                        <div className="col-sm-6">
                            <p>Monday - Friday, 9am to 6pm </p>
                        </div>
                        <div className="col-sm-6">
                            <p className="text-right">Call us now +1 (234) 567-8900</p>
                        </div>
                    </div>
                </div>

                <div className="container navigation">
                    <a className="navbar-brand" href="index.html" style={{ marginTop: '5px' }}>
                        <img src="images/logo.png" alt="" width="150" height="40" />
                    </a>

                    <div className="navbar-collapse navbar-right">
                        <ul className="nav navbar-nav">
                            <li className={location.pathname === "/" ? "active" : ""}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={location.pathname === "/about" ? "active" : ""}>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className={location.pathname === "/services" ? "active" : ""}>
                                <Link to="/services">Services</Link>
                            </li>
                            <li className={location.pathname === "/doctors" ? "active" : ""}>
                                <Link to="/doctors">Doctors</Link>
                            </li>
                            <li className={location.pathname === "/schedule" ? "active" : ""}>
                                <Link to="/schedule">Appointments</Link>
                            </li>
                            <li className={location.pathname === "/order" ? "active" : ""}>
                                <Link to="/order">Order Medicine</Link>
                            </li>
                            <li className={location.pathname === "/contact" ? "active" : ""}>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className={location.pathname === "/login" || location.pathname === "/profile" ? "active" : ""}>
                                {user ? <Link to="/profile" state={{ user: user }}>{user.userName}</Link> : <Link to="/login">Log In</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServisePage />} />
                <Route path="/doctors" element={<DoctorPage />} />
                <Route path="/schedule" element={<AppointmentPage />} />
                <Route path="/order" element={<ShopPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage setUser={setUser} />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/profile" element={<ProfilePage setUser={setUser} />} />
            </Routes>

            <div className="copyright-area">
                <div className="container">
                    <div className="col-md-8">
                        <p>© 2024 Lifecare. All Rights Reserved</p>
                    </div>
                    <div className="col-md-4">
                        <p><i className="fa fa-phone"></i> +1 (234) 567-8900</p>
                        <p><i className="fa fa-paper-plane"></i> info@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function WrappedApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}
