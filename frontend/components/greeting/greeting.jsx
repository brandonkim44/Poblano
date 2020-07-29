import React from 'react';
import PersonOutline from "../../../app/assets/images/person-outline.png";

const Greeting = ({ currentUser, openModal }) => {
    const signIn = () => {
        return (
            <div className="header-left-container-sign-in" onClick={() => {debugger;
                return (openModal('signin'))}}>
                <img className="person-outline-img" src={PersonOutline} alt="person" />
                <h4 className="sign-in-header">SIGN IN</h4>
            </div>
        );
    };
    const greeting = () => {
        debugger;
        return (
            <div className="header-left-container-greeting">
                {/* <img className="" src={} alt="person" /> */}
                <h4 className="sign-in-header">HEY {currentUser.firstName}</h4>
            </div>
        );
    };

    return currentUser ? greeting() : signIn();
};


export default Greeting;