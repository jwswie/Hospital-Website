import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/FontStyle.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function MedicinePage({ user }) {
    const location = useLocation();
    const { medicineID } = location.state || {};
    const navigate = useNavigate();

    const [medicine, setMedicine] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (medicineID) {
            axios.get(`/api/Medicines/${medicineID}`)
                .then(response => {
                    setMedicine(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                    setError('Unable to fetch medicine data');
                    setLoading(false);
                });
        } else {
            setError('No medicine ID provided');
            setLoading(false);
        }
    }, [medicineID]);

    const handleBuyNow = () => {

        const newOrder = {
            userID: user.userID,
            medicineID: medicineID,
            quantity: 1
        };

        axios.post('/api/Orders', newOrder)
            .then(response => {
                navigate('/cart');
            })
            .catch(error => {
                console.error('Error creating order: ', error);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!medicine) {
        return <div>No medicine data available.</div>;
    }

    return (
        <div className="clinic_version" style={{ overflow: 'hidden' }}>
            <div className="container" style={{ marginTop: '200px', marginBottom: '100px' }} >
                <div className="row">
                    <div className="col-md-5" style={{ marginRight: 'auto' }}>
                        <img src={medicine.medicinePhoto} alt="medicine-image" className="img-fluid p-5"></img>
                    </div>

                    <div className="col-md-6">
                        <h1 style={{ color: '#000' }}>{medicine.medicineName}, {medicine.medicineWeight}g</h1>
                        <p>{medicine.medicineDescription}</p>
                        <h4><strong style={{ color: '#000' }}>${medicine.medicinePrice}</strong></h4>

                        <button onClick={handleBuyNow}  style={{ marginTop: '20px', outline: 'none' }} className="btn-light btn-brd effect-1">Add to Cart</button>

                        <p style={{ color: '#1d86df', marginTop: '20px' }}>Specifications</p>

                        <div className="tab-pane" id="pills-profile">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>PACKAGING</td>
                                        <td className="bg-light">{medicine.packaging}</td>
                                    </tr>
                                    <tr>
                                        <td>HPIS CODE</td>
                                        <td className="bg-light">OTC112916</td>
                                    </tr>
                                    <tr>
                                        <td>HEALTHCARE PROVIDERS ONLY</td>
                                        <td className="bg-light">{medicine.healthcareProvidersOnly ? 'Yes' : 'No'}</td>
                                    </tr>
                                    <tr>
                                        <td>MEDICATION ROUTE</td>
                                        <td className="bg-light">{medicine.medicationRoute}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MedicinePage;