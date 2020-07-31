import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import { Link, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import ModalContainer from './modal/modal_container';
import ProfileContainer from './profile/profile_container';
const App = (props) => {

    // const handleClick = () => {
    //     debugger;
    //     props.history.push("/")
    // }
    
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

            <div>
                <img src="" alt=""/>
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

    </div>
    );
};

export default withRouter(App);