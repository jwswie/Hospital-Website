import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/FontStyle.css';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function ProfilePage({ setUser }) {
    const location = useLocation();
    const { user } = location.state || {};
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);

        navigate('/login');
    };

    return (
        <div className="clinic_version">
            <div className="section" style={{ marginTop: '245px' }}>
                <div className="text-center">
                    <h2 className="text-black" style={{ fontSize: '70px' }}>
                        {user?.userName ? `Hello, ${user.userName}!` : 'User not found'}
                    </h2>
                    <p>{user?.phoneNumber || 'No phone number available'}</p>
                    <a onClick={handleLogout} className="btn-light btn-brd effect-1" style={{ outline: 'none' }}> Log out </a>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;