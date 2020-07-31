import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import { Link, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import ModalContainer from './modal/modal_container';
import ProfileContainer from './profile/profile_container';
const App = (props) => {
    
    return (
    <div>
        <ModalContainer />
        <header className="header">
            <div className="header-left-container">
                <Link to="/">
                    <img className="poblano-logo-img" src={window.poblanoLogo} alt="poblano-logo"/>
                </Link>
                <GreetingContainer />
            </div>

            <Switch>
                
            </Switch>
            

            <nav className="nav-bar">
                <div className="nav-bar-container">
                    <ul className="ul-list-nav">
                        {/* <li>Order</li>
                        <li>Rewards</li>
                        <li>Our Values</li>
                        <li>Nutrition</li> */}
                    </ul>
                </div>
            </nav>
        </header>
        <main className="main-container">
            <div className="guac-banner" >
                <h1>- Be Extra -</h1>
                <img className="guac-img" src={window.guac} alt="guac" />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
                        <li>
                        </li>
        </main>

    </div>
    );
};

export default withRouter(App);