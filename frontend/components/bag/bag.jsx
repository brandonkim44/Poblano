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

  calcTotalPriceOfBag() {

  }

  calcTotalPriceOfOrder(order) {

  }

  handleClick() {
    document.body.className = "modal-close";
    this.props.closeModal();
  }
  
  renderOrders() {
    const orders = this.props.orders.map((order) => {
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
    this.setState( { totalBagPrice: this.totalBagPrice } );
    return orders;
  };

  render() {

    return (
      <div id="bagModal" className="bag-modal">
        <div className="bag-modal-content">
          <div className="bag-modal-header">
            <div className="bag-header-top">
              <FindChipotleContainer />
              <span className="modal-close-button" onClick={this.handleClick}>x</span>
            </div>
            <div className="bag-header-bottom">
              <span>Make it a group order</span>
            </div>
          </div>
          <div className="bag-main-container">
            {this.renderOrders()}
            <BagPricing bagTotal={this.state.totalBagPrice}/>
          </div>
          <div>Checkout</div>
        </div>
      </div>
    );
  }
};

//add a component to this also for bag total calculation section

export default Bag;