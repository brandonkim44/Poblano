import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import { OrderModal } from "./order_modal";

const mapStateToProps = ({ entities: { orders }, ui: { modal } }) => {
  const orderId = orders["currentOrderId"];
  return {
    modal,
    orderId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderModal);
