import { connect } from 'react-redux';
import SessionForm from './session_form';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return ({
        input: {
            email: "",
            password: ""
        },
        errors: state.errors.session,
        formType: 'SIGN IN'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        login: (user) => dispatch(login(user)),
        submitForm: user => dispatch(login(user)),
        otherForm: (
            <div>
                <h3 className="heading">NOT A MEMBER?</h3>
                <span className="subheading">Join Rewards. Get Rewarded.</span>
                <br/>
                <button className="goto-signin-button" onClick={() => dispatch(openModal('signup'))}>CREATE AN ACCOUNT</button>
            </div>
        ),
        clearErrors: () => dispatch(clearErrors()),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);