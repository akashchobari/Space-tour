import React, { Component, useState } from 'react';
import MobileMenu from './mobile_menu';
import classes from './header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function handleClick(){
        setIsMenuOpen(!isMenuOpen);
    }
    return ( 
            <header className="menu" >  
                <Link to="/" className='logo'></Link>
                {
                    !isMenuOpen? (<button onClick={handleClick} className="mobile_menu">
                    </button>) :
                    (<button onClick={handleClick} className="mobile_menu_close">
                    </button>)
                }
                { isMenuOpen && <MobileMenu />}
                <ul className="navbar_desktop active">
                  <li>
                    <Link  to="/" exact>
                      <span>00</span> Home
                    </Link>
                  </li>
                  <li>
                    <Link  to="/destination" exact>
                      <span>01</span> Destination
                    </Link>
                  </li>
                  <li>
                    <Link  to="/crew" exact>
                      <span>03</span> Crew
                    </Link>
                  </li>
                  <li>
                    <Link  to="/technology" exact>
                      <span>04</span> Technology
                    </Link>
                  </li>
                </ul>
            </header>
     );
}
 
export default Header;