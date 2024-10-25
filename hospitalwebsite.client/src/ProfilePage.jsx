import './css/profile-style.css';
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
        <div className="clinic_version" style={{ overflow: 'hidden' }}>
            <div className="container" style={{ marginTop: '150px' }}>
                <div className="profile-nav col-md-3">
                    <div className="user-heading">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                            alt="User avatar"
                        />
                        <h1 style={{ color: '#fff', marginTop: '10px' }}>{user?.userName ? `${user.userName}` : 'User not found'}</h1>
                        <p>{user?.phoneNumber || 'No phone number available'}</p>
                    </div>
                    <a style={{ outline: 'none', marginTop: '25px', position: 'relative', left: '70px' }} onClick={handleLogout} className="btn-light btn-brd effect-1"> Log out </a>
                </div>

                <div className="profile-info col-md-9">
                    <div className="panel">
                        <div className="bio-graph-heading">
                            Welcome to Your Personal Health Profile
                        </div>
                        <div className="bio-graph-info" style={{ marginTop: '25px' }}>
                            <h1>Bio Graph</h1>
                            <div className="row">
                                <div className="bio-row">
                                    <p><span>First Name </span>: Camila</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Last Name </span>: Smith</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Birthday</span>: 13 July 1983</p>
                                </div>
                                <div className="bio-row">
                                    <p><span>Phone </span>: {user?.phoneNumber || 'No phone number available'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <div className="bio-chart">
                                        <div style={{ display: 'inline', width: '100px', height: '100px' }}>
                                            <canvas width="100" height="100px"></canvas>
                                            <input
                                                value="3"
                                                style={{
                                                    width: '54px',
                                                    height: '33px',
                                                    position: 'absolute',
                                                    marginTop: '33px',
                                                    marginLeft: '-77px',
                                                    border: '0px',
                                                    fontWeight: 'bold',
                                                    fontSize: '20px',
                                                    textAlign: 'center',
                                                    color: 'rgb(224, 107, 125)'
                                                }}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="bio-desk">
                                        <h4 style={{ color: '#e26b7f' }}>Your Diagnoses</h4>
                                        <p>Last Updated: 15.10.24</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <div className="bio-chart">
                                        <div style={{ display: 'inline', width: '100px', height: '100px' }}>
                                            <canvas width="100" height="100px"></canvas>
                                            <input
                                                value="2"
                                                style={{
                                                    width: '54px',
                                                    height: '33px',
                                                    position: 'absolute',
                                                    marginTop: '33px',
                                                    marginLeft: '-77px',
                                                    border: '0px',
                                                    fontWeight: 'bold',
                                                    fontSize: '20px',
                                                    textAlign: 'center',
                                                    color: 'rgb(76, 197, 205)'
                                                }}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="bio-desk">
                                        <h4 style={{ color: '#4CC5CD' }}>Your Prescriptions</h4>
                                        <p>Last Updated: 15.10.24</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <div className="bio-desk">
                                        <h4 style={{ color: '#97be4b' }}>Your Medical Records</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <div className="bio-desk">
                                        <h4 style={{ color: '#caa3da' }}>Your Outpatient Card</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;