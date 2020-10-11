import React from 'react';
import BagOrderItem from './bag_order_item';
import { BagPricing } from './bag_pricing';
import FindChipotleContainer from '../find_chipotle/find_chipotle_container';
 
class Bag extends React.Component {
  constructor(props) {
    super(props);
    this.calcTotalPriceOfBag = this.calcTotalPriceOfBag.bind(this);
    this.calcTotalPriceOfOrder = this.calcTotalPriceOfOrder.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderOrders = this.renderOrders.bind(this);
    this.totalBagPrice = 0;
    this.state = {
        totalBagPrice: this.totalBagPrice
    }
  }

  componentDidMount() {
      debugger;
    this.renderOrders();
  }

  calcTotalPriceOfBag() {

  }

  calcTotalPriceOfOrder(order) {
      const sidePrices = Object.values(order.sides);
      let total = order.price;
      sidePrices.forEach((price) => {
        total += price;
      })
      return total;
  }

  handleClick() {
    document.body.className = "modal-close";
    this.props.closeModal();
  }
  
  renderOrders() {
    const orders = this.props.orders.map((order) => {
        debugger;
        let totalPriceOfOrder = this.calcTotalPriceOfOrder(order);
        this.totalBagPrice += totalPriceOfOrder;
      return (
        <BagOrderItem
          key={order.orderId}
          orderName={order.orderName}
          mealType={order.mealName}
          mainMealPrice={order.price}
          details={order.details}
          sides={order.sides}
          lifestyles={order.lifestyles}
          totalPrice={totalPriceOfOrder}
        />
      );
    });
    debugger;
    this.setState({ totalBagPrice: this.totalBagPrice.toFixed(2), orders: orders });
  };

  render() {
      debugger;

    return (
      <div id="bagModal" className="bag-modal">
        <div className="bag-modal-content">
          <div className="bag-modal-header">
            <div className="bag-header-top">
              <FindChipotleContainer modalType={this.props.modal}/>
              <span className="bag-modal-close-button" onClick={this.handleClick}>x</span>
            </div>
            <div className="bag-header-bottom">
              <span>Make it a group order</span>
            </div>
          </div>
          <div className="bag-main-container">
            {this.state.orders}
            <BagPricing bagTotal={this.state.totalBagPrice}/>
          </div>
          <br/><br/><br/>
          <div className="bag-checkout">Checkout</div>
        </div>
      </div>
    );
  }
};

//add a component to this also for bag total calculation section

export default Bag;