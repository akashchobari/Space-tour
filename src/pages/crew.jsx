import React, { Component, useState } from 'react';

import Header from '../components/header';
import data from '../data.json';

import './crew.css';

const Crew = () => {
    const[index, setIndex] = useState(0);
    const[crewImg, setCrewImg] = useState('crew-douglas-img');
    const[activePage, setActivePage] = useState('active-item-0');
    const crews = data.crews;

    function handleClick(e){
        if(e.target.id === "0"){
            setIndex(0);
            setCrewImg('crew-douglas-img');
            setActivePage('active-item-${e.target.id}');
        }
        else if(e.target.id === "1"){
            setIndex(1);
            setCrewImg('mark-shuttleworth-img');
            setActivePage('active-item-${e.target.id}');
        }
        else if(e.target.id === "2"){
            setIndex(2);
            setCrewImg('victor-glover-img');
            setActivePage('active-item-${e.target.id}');
        }
        else if(e.target.id === "3"){
            setIndex(3);
            setCrewImg('anousheh-ansari-img');
            setActivePage('active-item-${e.target.id}');
        }
    }
    return ( 
        <div className='crew-main'>
            <Header />
            <div className="crew-sub-main">
                <h3><span>02</span> MEET YOUR CREW</h3>
                <div className='desktop-crew-content'>
                    <div>
                        <div className={`${crewImg}`}></div>
                        <div className='crew-line'></div>
                    </div>
                    <div className="desktop-description-card">
                        <div className="carousel">
                            <ul>
                                <li onClick={handleClick} id="0" className={activePage}></li>
                                <li onClick={handleClick} id="1" className={activePage}></li>
                                <li onClick={handleClick} id="2" className={activePage}></li>
                                <li onClick={handleClick} id="3" className={activePage}></li>
                            </ul>
                        </div>
                        <div className="crew-card">
                            <h2>{crews[index].designation}</h2>
                            <h1>{crews[index].name}</h1>
                            <p>{crews[index].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Crew;