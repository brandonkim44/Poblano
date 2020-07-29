import React from 'react';
import PersonOutline from "../../../app/assets/images/person-outline.png";

const Greeting = ({ currentUser, openModal }) => {
    const signIn = () => {
        return (
            <div className="header-left-container" onClick={() => {
                return (openModal('signin'))}}>
                <div className="header-left-container-sign-in">
                    <img className="person-outline-img" src={PersonOutline} alt="person" />
                    <h4 className="sign-in-header">SIGN IN</h4>
                </div>
            </div>
        );
    };
    const greeting = () => {
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