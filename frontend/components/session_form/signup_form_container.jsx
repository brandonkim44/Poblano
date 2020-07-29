import { connect } from 'react-redux';
import SessionForm from './session_form';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return ({
        input: {
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email",
            password: "Password",
            phoneNumber: "Mobile Number",
            country: "United States"
        },
        errors: state.errors.session,
        formType: 'CREATE AN ACCOUNT'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        submitForm: user => dispatch(signup(user)),
        otherForm: (
            <div>
                <span>Already a member?</span>
                <br/>
                <button className="goto-signup-button" onClick={() => dispatch(openModal('signin'))}>SIGN IN</button>
            </div>
        ),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);