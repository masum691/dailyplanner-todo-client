import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AllLists from '../AllLists/AllLists';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar></Navbar>
            <AllLists></AllLists>
        </div>
    );
};

export default Home;