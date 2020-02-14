import React from 'react';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import './Main.css';

const Main = () => {
    return (
        <div className='Main'>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default Main;