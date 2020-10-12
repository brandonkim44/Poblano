import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import Header from "./header";

const mapStateToProps = ({ entities: { orders } }) => {
    let ordersCopy = Object.assign({}, orders);
    delete ordersCopy.currentOrderId;
    orders = Object.values(ordersCopy);
  return {
    orders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: () => dispatch(closeErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
