import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ProfileContainer from '../profile/profile_container';
import NavBar from './../navbar/navbar';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        document.body.className = 'modal-close'
        this.props.closeModal();
    }

    render () {
        if (!this.props.modal) {
            return null;
        }
        let component;
        switch (this.props.modal) {
            case 'signin':
                component = <LoginFormContainer />;
                break;
            case 'signup':
                component = <SignupFormContainer />;
                break;
            case 'profile':
                component = <ProfileContainer />
                break;
            case 'nav':
                component = <NavBar />
            default:
                return null;
        }

        //make modal dynamic
        return (
            <div className="modal-background">
                <div className="modal-display-container">
                    <img className="gradient-banner" src={window.gradientBanner} alt="gradient-banner"/>
                    <div className="modal-logo-img">
                        <img className="poblano-logo-simple" src={window.PoblanoLogoSimple} alt="poblano-logo-simple" />
                    </div>
                    <span className="modal-close-button" onClick={this.handleClick}>x</span>
                </div>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    }
}

export default Modal;