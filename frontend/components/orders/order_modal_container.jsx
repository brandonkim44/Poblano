import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import { OrderModal } from "./order_modal";

const mapStateToProps = ({ ui: { modal } }) => {
  debugger;
  return {
    modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderModal);
