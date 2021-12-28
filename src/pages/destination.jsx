import React, { Component, useState } from 'react';
import Header from '../components/header';
import { Link, Route, Switch } from 'react-router-dom';

import classes from './destination.css';

import './destination.css';

import data from '../data.json';

const Destination = () => {
    const [planet, setPlanet] = useState("destination_moon");
    const [index, setIndex] = useState(0);

    function handleClick(e){
      if(e.target.id === "moon"){
        setIndex(0);
        setPlanet("destination_moon");
      }
      else if(e.target.id === "mars"){
        setIndex(1);
        setPlanet("destination_mars");
      }
      else if(e.target.id === "europa"){
        setIndex(2);
        setPlanet("destination_europa");
      }
      else if(e.target.id === "titan"){
        setIndex(3);
        setPlanet("destination_titan");
      }
    }

    const destinations = data.destinations;
    return (
        <div className='destination-main'>
            <Header />
            <h1><span>01</span> PICK YOUR DESTINATION</h1>
            <div className='destination-sub'>
              <div className={`${planet}`}> </div>
              <div className='destination-card'>
                <ul className="navbar_destination">
                    <li onClick={handleClick} id='moon'>MOON</li>
                    <li onClick={handleClick} id='mars'>MARS</li>
                    <li onClick={handleClick} id='europa'>EUROPA</li>
                    <li onClick={handleClick} id='titan'>TITAN</li>
                  </ul>

                <div className="navbar-destination-content">
                  <h1 id='name'>{destinations[index].name}</h1>
                  <p>{destinations[index].description}</p>
                  <div className='line'></div>
                  <div className="distance-time">
                    <div className="average_distance">
                      <h3><span>AVG.</span> DISTANCE</h3>
                      <h4>{destinations[index].distance}</h4>
                    </div>
                    <div className="average_time">
                      <h3><span>EST.</span> TRAVEL TIME</h3>
                      <h4>{destinations[index].time}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
      );
}
 
export default Destination;