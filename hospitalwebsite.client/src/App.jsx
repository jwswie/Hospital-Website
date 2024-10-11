import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import TutorialPage from './components/TutorialPage';  <TutorialPage />
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<AboutPage />} />
                    <Route path="/doctors" element={<AboutPage />} />
                    <Route path="/schedule" element={<AboutPage />} />
                    <Route path="/order" element={<AboutPage />} />
                    <Route path="/contact" element={<AboutPage />} />
                    <Route path="/login" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;