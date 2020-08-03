import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import { Link, Route, Redirect, Switch, withRouter, NavLink } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import ModalContainer from './modal/modal_container';
import ProfileContainer from './profile/profile_container';
import FindChipotleContainer from './find_chipotle/find_chipotle_container';
import NavBar from './navbar/navbar';
import Footer from '../footer/footer';
import Main from '../components/main/main';
import { openModal } from '../actions/modal_actions';
import NutritionLandingContainer from './nutrition/nutrition_landing_container';

//come back to hamgburger menu
const App = (props) => {
    return (
    <div>
        <ModalContainer />

        <header className="header">
            <img className="hamburger" src={window.hamburger} alt="hamburger-icon" onClick={() => dispatch(openModal('nav'))}/>
            
            <div className="header-left-container">
                <Link to="/">
                    <img className="poblano-logo-img" src={window.poblanoLogo} alt="poblano-logo"/>
                </Link>
                    <GreetingContainer />
            </div>
            
            <NavBar />

            <div className="header-right-container">
                <div>
                    <FindChipotleContainer />
                </div>
                <div>
                    <img className="bag-icon" src={window.bagIcon} alt="bag-icon"/>
                </div>
            </div>
        </header>

        <Switch>
            <Route exact path="/nutrition-calculator" component={NutritionLandingContainer}/>
            <Route exact path="/" component={Main}/>
        </Switch>
        
        <Footer />

    </div>
    );
};

export default withRouter(App);