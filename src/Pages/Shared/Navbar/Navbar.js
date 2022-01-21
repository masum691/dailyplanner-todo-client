import React from 'react';
import { Link } from 'react-router-dom';
import AllLists from '../../Home/AllLists/AllLists';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container row align-items-center text-center'>
            
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <nav>
                    <ul>
                        <li class="nav-item">
                            <Link to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/add-item">Add item</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <AllLists></AllLists>
        </div>
    );
};

export default Navbar;