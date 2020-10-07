import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import Bag from "./bag";

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

export default connect(mapStateToProps, mapDispatchToProps)(Bag);
