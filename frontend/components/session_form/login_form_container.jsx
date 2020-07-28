import { connect } from 'react-redux';
import SessionForm from './session_form';
import React from 'react';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => {
    return ({
        input: {
            email: "Email",
            password: "Password"
        },
        errors: state.errors.session,
        formType: 'SIGN IN'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        submitForm: user => dispatch(login(user)),
        otherForm: (
            <div>
                <h3>NOT A MEMBER?</h3>
                <span>Join Rewards. Get Rewarded.</span>
                <button onClick={() => dispatch(openModal('signup'))}>CREATE AN ACCOUNT</button>
            </div>
        ),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);