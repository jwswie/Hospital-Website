import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/order-style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShopPage() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [medicines, setMedicines] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');  // State for filter option

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSearchOpen = (e) => {
        e.preventDefault();
        setSearchActive(true);
        setTimeout(() => {
            const input = document.querySelector('.search-wrap .form-control');
            if (input) {
                input.focus();
            }
        }, 300);
    };

    const handleSearchClose = (e) => {
        e.preventDefault();
        setSearchActive(false);
    };

    // Fetch medicines from the API
    useEffect(() => {
        axios.get('/api/Medicines')
            .then(response => {
                console.log(response.data);
                setMedicines(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    // Filter and sort medicines based on search query and filter
    const getFilteredMedicines = () => {
        let filteredMedicines = medicines.filter(medicine =>
            medicine.medicineName.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Apply sorting based on the filter
        switch (filter) {
            case 'priceLowToHigh':
                filteredMedicines = filteredMedicines.sort((a, b) => a.medicinePrice - b.medicinePrice);
                break;
            case 'priceHighToLow':
                filteredMedicines = filteredMedicines.sort((a, b) => b.medicinePrice - a.medicinePrice);
                break;
            case 'nameAToZ':
                filteredMedicines = filteredMedicines.sort((a, b) => a.medicineName.localeCompare(b.medicineName));
                break;
            case 'nameZToA':
                filteredMedicines = filteredMedicines.sort((a, b) => b.medicineName.localeCompare(a.medicineName));
                break;
            default:
                break;
        }

        return filteredMedicines;
    };

    const handleFilterChange = (filterOption) => {
        setFilter(filterOption);  // Set the selected filter
    };

    const filteredMedicines = getFilteredMedicines();  // Get filtered medicines

    return (
        <div className="clinic_version">
            <div className="container" style={{ marginTop: '200px', marginBottom: '20px' }}>
                <div className="row">

                    <div className="col-lg-6">
                        <h2 style={{ fontSize: '30px' }}>Filter by Reference</h2>
                        <button type="button" style={{ fontSize: '20px' }} className="btn btn-secondary btn-md dropdown-toggle px-4" onClick={toggleDropdown} > Reference </button>
                        {dropdownOpen && (
                            <div className="dropdown-menu show" aria-labelledby="dropdownMenuReference" style={{ fontSize: '15px', marginLeft: '10px' }}>
                                <a className="dropdown-item" href="#" onClick={() => handleFilterChange('nameAToZ')}>Name, A to Z</a>
                                <a className="dropdown-item" href="#" onClick={() => handleFilterChange('nameZToA')}>Name, Z to A</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" onClick={() => handleFilterChange('priceLowToHigh')}>Price, low to high</a>
                                <a className="dropdown-item" href="#" onClick={() => handleFilterChange('priceHighToLow')}>Price, high to low</a>
                            </div>
                        )}
                    </div>

                    <div className="col-lg-6">
                        <div className="site-navbar" style={{ paddingTop: '0.5rem' }}>
                            <div className={`search-wrap ${searchActive ? 'active' : ''}`}>
                                <a href="#" className="search-close js-search-close" onClick={handleSearchClose}>
                                    <span className="fa fa-close"></span>
                                </a>
                                <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search keyword and hit enter..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}  // Update search query state
                                    />
                                </form>
                            </div>
                            <h2 style={{ fontSize: '30px' }}>Search by Name</h2>
                            <a href="#" className="icons-btn js-search-open" onClick={handleSearchOpen}>
                                <span className="fa fa-search"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Map over filtered and sorted medicines */}
                    {Array.isArray(filteredMedicines) && filteredMedicines.map((medicine) => (
                        <div className="col-lg-4 item" style={{ textAlign: 'center' }} key={medicine.medicineID}>
                            <a href=""> <img src={medicine.medicinePhoto} alt="Image" /></a>
                            <h3 className="text-dark">{medicine.medicineName}</h3>
                            <p className="price">${medicine.medicinePrice}</p>
                        </div>
                    ))}
                </div>

                <div className="col-md-12" style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <div className="site-block-27">
                        <ul>
                            <li><a href="#">&lt;</a></li>
                            <li className="active"><span>1</span></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">&gt;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopPage;
