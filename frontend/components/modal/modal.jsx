import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ProfileContainer from '../profile/profile_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        debugger;
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
                debugger;
                component = <ProfileContainer />
                break;
            default:
                return null;
    }
        return (
            <div className="modal-background">
                <span className="modal-close-button" onClick={this.props.closeModal}>x</span>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <img className="poblano-logo-simple" src={window.PoblanoLogoSimple} alt="poblano-logo-simple" />
                    {component}
                </div>
            </div>
        );
    }
}

export default Modal;