import React, { Component, useState } from 'react';
import Header from '../components/header';

import data from '../data.json';
import './technology.css';

const Technology = () => {
    const[index, setIndex] = useState(0);
    const[bgImg, setBgImg] = useState("technology-launch-vehicle");
    const technologies = data.technologies;

    function handleClick(e){
        if(e.target.value == "1"){
            setIndex(0);
            setBgImg("technology-launch-vehicle");
        }
        else if(e.target.value == "2"){
            setIndex(1);
            setBgImg("technology-spaceport");
        }
        else if(e.target.value == "3"){
            setIndex(2);
            setBgImg("technology-space-capsule");
        }
    }
    return ( 
        <div className='technology-main'>
            <Header />
            <div className="technology-sub">
                <h1><span>03</span> SPACE LAUNCH 101</h1>
                <div className={`${bgImg}`}></div>  
                <div className="tech-carousel">
                    <ul>
                        <li onClick={handleClick} value="1">1</li>
                        <br />
                        <li onClick={handleClick} value="2">2</li>
                        <br />
                        <li onClick={handleClick} value="3">3</li>
                    </ul>
                </div>
                <div className="technology-card">
                    <h2>THE TERMINOLOGY...</h2>
                    <h3>{technologies[index].name}</h3>
                    <p>{technologies[index].description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Technology;