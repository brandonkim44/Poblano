import { connect } from 'react-redux';
import SessionForm from './session_form';
import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return ({
        input: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            country: true
        },
        errors: state.errors.session,
        formType: 'CREATE AN ACCOUNT'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        submitForm: user => dispatch(signup(user)),
        otherForm: (
            <div className="signup-instead-container">
                <span className="already-member">AlREADY A MEMBER?</span>
                <span className="goto-signin-button" onClick={() => dispatch(openModal('signin'))}>SIGN IN</span>
            </div>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);