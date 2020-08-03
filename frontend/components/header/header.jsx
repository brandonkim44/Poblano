import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import GreetingContainer from '../greeting/greeting_container';
import FindChipotleContainer from '../find_chipotle/find_chipotle_container';
import NavBar from '../navbar/navbar';

const Header = () => {
    //come back to hamgburger menu
        return (
            <header className="header">
                <img className="hamburger" src={window.hamburger} alt="hamburger-icon" onClick={() => dispatch(openModal('nav'))} />

                <div className="header-left-container">
                    <Link to="/">
                        <img className="poblano-logo-img" src={window.poblanoLogo} alt="poblano-logo" />
                    </Link>
                    <GreetingContainer />
                </div>

                <NavBar />

                <div className="header-right-container">
                    <div>
                        <FindChipotleContainer />
                    </div>
                    <div>
                        <img className="bag-icon" src={window.bagIcon} alt="bag-icon" />
                    </div>
                </div>
            </header>
        )
};

export default Header;