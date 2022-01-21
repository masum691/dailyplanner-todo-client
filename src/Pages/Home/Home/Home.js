import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AllLists from '../AllLists/AllLists';
import './Home.css'

const Home = () => {
    return (
        <div className='width-container'>
            <div className="home-container">
            <Navbar></Navbar>
            {/* <AllLists></AllLists> */}
            </div>
        </div>
    );
};

export default Home;