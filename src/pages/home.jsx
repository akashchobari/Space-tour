import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import Header from '../components/header';

import './home.css';

const Home = () => {
    return ( 
        <div className='home_content'>
            <Header />
            <div className="home_content_main">
                <div className='home_text_card'>
                    <h3>SO, YOU WANT TO TRAVEL TO</h3>
                    <h1>SPACE</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat omnis, quibusdam perferendis aliquid nemo. Architecto ad optio blanditiis deserunt tempora. Facilis minima molestias voluptate est optio doloribus praesentium quidem!</p>
                </div>

                <Link to="/destination">
                    <button className="home_explore">
                        EXPLORE
                    </button>
                </Link>
            </div>
        </div>
     );
}
 
export default Home;