import { RECEIVE_ORDER } from "../actions/order_actions";

const orderReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_ORDER:
      return action.order;
    default:
      return state;
  }
};

export default orderReducer;
