import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import GreetingContainer from '../greeting/greeting_container';
import FindChipotleContainer from '../find_chipotle/find_chipotle_container';
import NavBar from '../navbar/navbar';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.displayOrderCount = this.displayOrderCount.bind(this);
    }

    openBag() {
        document.body.className = "modal-open";
        dispatch(openModal('bag'));
    }

   displayOrderCount() {

        if (this.props.orders.length > 0) {
            if (document.querySelector(".bag-order-count")) document.querySelector(".bag-order-count").style.display = 'unset';
            return this.props.orders.length;
        } else {
            if (document.querySelector(".bag-order-count")) document.querySelector(".bag-order-count").style.display = 'none';
        }
    }
    //come back to hamgburger menu

    render() {
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
                        <div className="bag-icon-container">
                            <img className="bag-icon" src={window.bagIcon} alt="bag-icon" onClick={() => this.openBag()}/>
                            <span className="bag-order-count">{this.displayOrderCount()}</span>
                        </div>
                    </div>
                </header>
            )
        }
};

export default Header;