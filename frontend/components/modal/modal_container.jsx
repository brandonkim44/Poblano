import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = ({ ui: { modal} }) => {
    return ({
        modal
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);