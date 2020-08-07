import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    debugger;
    return (
        <nav className="nav-bar">
            <div className="nav-bar-container">
                <ul className="ul-list-nav">
                    <li>
                        <NavLink 
                            to="/order" 
                            className="nav-bar-item" 
                            activeClassName="nav-bar-item-clicked" 
                            replace
                        >ORDER</NavLink>
                    </li>
                    <li>
                        <a href="/" className="nav-bar-item">CATERING</a>
                    </li>
                    <li>
                        <NavLink 
                            to="/rewards" 
                            className="nav-bar-item" 
                            activeClassName="nav-bar-item-clicked" 
                            replace
                        >REWARDS</NavLink>
                    </li>
                    <li>
                        <a href="/" className="nav-bar-item">OUR VALUES</a>
                    </li>
                    <li>
                        <NavLink 
                            to="/nutrition-calculator" 
                            className="nav-bar-item" 
                            activeClassName="nav-bar-item-clicked" 
                            replace
                        >NUTRITION</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
