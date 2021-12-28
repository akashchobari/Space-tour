import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

import './mobile_menu.css';

const MobileMenu = () => {
    return ( 
        <div className='mobile_menu_sidebar'>
            <ul className='mobile_menu_ul'>
                <li><NavLink to={"/"}> <span>01</span> Home</NavLink></li>
                <li><NavLink to={"/destination"}> <span>02</span> Destination</NavLink></li>
                <li><NavLink to={"/crew"}> <span>03</span> Crew</NavLink></li>
                <li><NavLink to={"/technology"}> <span>04</span> Technology</NavLink></li>    
            </ul>
        </div>
     );
}
 
export default MobileMenu;