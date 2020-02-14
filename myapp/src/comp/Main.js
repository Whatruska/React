import React from 'react';
import Navbar from './Navbar/Navbar';
import './Main.css';
import Messages from "./Messages/Messages";
import Profile from "./Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

const Main = () => {
    return (
        <BrowserRouter>
            <div className='Main'>
                <Navbar/>
                <Route path="/Messages" component={Messages}/>
                <Route path="/Profile" component={Profile}/>
            </div>
        </BrowserRouter>
    );
}

export default Main;