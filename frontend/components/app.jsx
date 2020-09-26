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
import Header from './header/header';


const App = (props) => {

    const displayFooter = () => {
        if (props.location.pathname !== "/order") {
            return <Footer />
        }
    }

    return (
    <div>
        <ModalContainer />

        <Header />

        <Main />
        
        {displayFooter()}

    </div>
    );
};

export default withRouter(App);