import React from 'react';
import PersonOutline from "../../../app/assets/images/person-outline.png";
// import PoblanoLogo from "../../app/assets/images/poblano-logo.png";

const Greeting = ({ currentUser}) => {
    const signIn = () => (
        <div className="header-left-container-sign-in">
            <img className="person-outline-img" src={PersonOutline} alt="person" />
            <h4 className="sign-in-header">SIGN IN</h4>
        </div>
    );
    const greeting = () => (
        <div className="header-left-container-greeting">
            {/* <img className="" src={} alt="person" /> */}
            <h4 className="sign-in-header">HEY {currentUser.firstName}</h4>
        </div>
    );

    return currentUser ? greeting() : signIn();
};


export default Greeting;