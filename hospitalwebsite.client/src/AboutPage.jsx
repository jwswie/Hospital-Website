import './css/bootstrap1.min.css';

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {

  return (
    
    <div className="clinic_version">

          <div className="py-5">
              <div className="container">
                  <div className="row g-5">
                      <div className="col-lg-6">
                          <div className="d-flex flex-column">
                              <img className="w-75 align-self-end" src="images/about_01.jpg" alt="about-image"></img>
                              <img className="w-50 bg-white pt-3 pe-3" src="images/about_02.jpg" alt="about-image"
                                  style={{ marginTop: '-25%' }}></img>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <h1 className="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
                          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                              erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                          <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum
                              amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
                          </p>
                          <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
                          <p><i className="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
                          <p><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="bg-primary overflow-hidden my-5">

              <div className="row g-0">
                  <div className="col-lg-6 feature-text py-5">
                      <div className="p-lg-5 ps-lg-0">
                          <h1 className="text-white mb-4">Why Choose Us</h1>
                          <p className="text-white mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
                              amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
                          </p>

                          <div className="row g-4">
                              <div className="col-6">
                                  <div className="d-flex">
                                      <div className="d-flex align-items-center justify-content-center rounded-circle bg-light"
                                          style={{ width: '55px', height: '55px' }}>
                                          <i className="fa fa-user-md text-primary"></i>
                                      </div>
                                      <div className="ms-4">
                                          <p className="text-white mb-2">Experience</p>
                                          <h5 className="text-white mb-0">Doctors</h5>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-6">
                                  <div className="d-flex">
                                      <div className="d-flex align-items-center justify-content-center rounded-circle bg-light"
                                          style={{ width: '55px', height: '55px' }}>
                                          <i className="fa fa-check text-primary"></i>
                                      </div>
                                      <div className="ms-4">
                                          <p className="text-white mb-2">Quality</p>
                                          <h5 className="text-white mb-0">Services</h5>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-6">
                                  <div className="d-flex">
                                      <div className="d-flex align-items-center justify-content-center rounded-circle bg-light"
                                          style={{ width: '55px', height: '55px' }}>
                                          <i className="fa fa-comment-medical text-primary"></i>
                                      </div>
                                      <div className="ms-4">
                                          <p className="text-white mb-2">Positive</p>
                                          <h5 className="text-white mb-0">Consultation</h5>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-6">
                                  <div className="d-flex">
                                      <div className="d-flex align-items-center justify-content-center rounded-circle bg-light"
                                          style={{ width: '55px', height: '55px' }}>
                                          <i className="fa fa-headphones text-primary"></i>
                                      </div>
                                      <div className="ms-4">
                                          <p className="text-white mb-2">24 Hours</p>
                                          <h5 className="text-white mb-0">Support</h5>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="position-relative h-100">
                          <img className="position-absolute" src="images/about_03.jpg" style={{ objectFit: 'cover' }}
                              alt="about-image"></img>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  );
}

export default AboutPage;