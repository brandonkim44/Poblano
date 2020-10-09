import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import Bag from "./bag";

const mapStateToProps = ({ entities: { orders }, ui: { modal } }) => {
    debugger;
    let ordersCopy = Object.assign({}, orders);
    delete ordersCopy.currentOrderId;
    orders = Object.values(ordersCopy);
    // const ordersArray = Object.entries(orders).filter(orderPair => Number.isInteger(orderPair[0]));
  return {
    modal,
    orders
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bag);
