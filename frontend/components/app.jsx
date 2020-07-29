import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import { Link, Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import ModalContainer from './modal/modal_container';

const App = () => (
    <div>
        <ModalContainer />
        <header>
            <div className="header-left-container">
                <img className="poblano-logo-img" src={window.poblanoLogo} />
                <GreetingContainer />
            </div>
            <nav>

            </nav>
        </header>

    </div>
);

export default App;