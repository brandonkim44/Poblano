import React from 'react';
import PersonOutline from "../../../app/assets/images/person-outline.png";

const Greeting = ({ currentUser, openModal }) => {

    const handleClick = (modal) => {
        document.body.className = 'modal-open'
        return (
            openModal(modal)
        );
    };

    //is there a better way to solve the issue of the modal scroll?
    const signIn = () => {
        return (
            <div onClick={() => handleClick('signin')}>
                <div className="header-left-container-sign-in">
                    <img className="person-outline-img" src={PersonOutline} alt="person" />
                    <h4 className="sign-in-header">SIGN IN</h4>
                </div>
            </div>
        );
    };
    const greeting = () => {
        document.body.className = 'modal-close'
        return (
            <div className="header-left-container-greeting">
                <div className="header-left-container-sign-in" onClick={() => handleClick('profile')}>
                    {/* <img className="" src={} alt="person" /> */}
                    <h4 className="sign-in-header">HEY {currentUser.firstName}</h4>
                </div>
            </div>
        );
    };

    if (currentUser.id) {
        return greeting();
    } else {
        return signIn();
    }
};


export default Greeting;