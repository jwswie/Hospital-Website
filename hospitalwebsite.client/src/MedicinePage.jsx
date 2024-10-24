import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/FontStyle.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function MedicinePage() {
    const location = useLocation();
    const { medicineID } = location.state || {}; // Получаем medicineID из переданных параметров

    const [medicine, setMedicine] = useState(null); // Состояние для хранения данных о лекарстве
    const [loading, setLoading] = useState(true); // Состояние загрузки
    const [error, setError] = useState(null); // Состояние для хранения ошибки

    useEffect(() => {
        if (medicineID) {
            // Запрос к API для получения информации о конкретном лекарстве
            axios.get(`/api/Medicines/${medicineID}`)
                .then(response => {
                    setMedicine(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                    setError('Unable to fetch medicine data.');
                    setLoading(false);
                });
        } else {
            setError('No medicine ID provided.');
            setLoading(false);
        }
    }, [medicineID]);

    if (loading) {
        return <div>Loading...</div>; // Отображение индикатора загрузки
    }

    if (error) {
        return <div>Error: {error}</div>; // Отображение сообщения об ошибке
    }

    if (!medicine) {
        return <div>No medicine data available.</div>; // Если данных нет
    }

    return (
        <div className="clinic_version">
            <div className="container" style={{ marginTop: '200px' }}>
                <div className="row">
                    <div className="col-md-5" style={{ marginRight: 'auto' }}>
                        <img src={medicine.medicinePhoto} alt="medicine-image" className="img-fluid p-5"></img>
                    </div>

                    <div className="col-md-6">
                        <h1 style={{ color: '#000' }}>{medicine.medicineName}, {medicine.medicineWeight}g</h1>
                        <p>{medicine.medicineDescription}</p>
                        <h4><strong style={{ color: '#000' }}>${medicine.medicinePrice}</strong></h4>

                        <Link to="/">
                            <a href="#" style={{ marginTop: '20px' }} className="btn-light btn-brd effect-1">Add To Cart</a>
                        </Link>

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
                                        <td className="bg-light">{medicine.healthcareProvidersOnly}</td>
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
