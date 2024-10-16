import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import React, { useEffect } from 'react';

function ContactPage() {

    useEffect(() => {
        function myMap() {
            const mapProp = {
                center: new window.google.maps.LatLng(51.508742, -0.120850),
                zoom: 5,
            };
            new window.google.maps.Map(document.getElementById("googleMap"), mapProp);
        }

        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCNUPWkb4Cjd7Wxo-T4uoUldFjoiUA1fJc&callback=myMap";
        script.async = true;
        script.defer = true;
        window.myMap = myMap;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="clinic_version">
            <div className="section" style={{ marginTop: '100px' }}>
                <div className="heading">
                    <img src="images/icon-logo.png" alt="#"></img>
                    <h2>Get in Touch</h2>
                </div>

                <div className="contact-section">
                    <div className="form-contant">
                        <form action="" method="post">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" required="required"></input>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="E-mail" required="required"></input>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="tel" className="form-control" id="phone" placeholder="Phone" required="required"></input>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" required="required"></input>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea className="form-control" id="message" rows="5" placeholder="Message"
                                        required="required"></textarea>
                                </div>
                                <div className="actions">
                                    <input type="submit" value="Send Message" name="submit" id="submitButton" className="btn" title="Submit Your Message!"></input>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div id="googleMap" style={{ width: '100%', height: '450px' }}></div>
                </div>
            </div>

            <div className="container" style={{ marginBottom: '100px' }}>
                <div className="col-md-4">
                    <div className="logo">
                        <a href=""><img src="images/logo.png" alt=""></img></a>
                        <p>Caring for You, Every Step of the Way</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer-info">
                        <h3>CONTACT US</h3>
                        <p><i className="fa fa-map-marker"></i> PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                        <p><i className="fa fa-paper-plane"></i> info@gmail.com</p>
                        <p><i className="fa fa-phone"></i> (+1) 234 567 890</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="subcriber-info">
                        <h3>SUBSCRIBE</h3>
                        <p>Get healthy news, tip and solutions to your problems from our experts</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Email address" className="form-control"></input>
                            <button className="mc-submit" type="submit"><i className="fa fa-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;