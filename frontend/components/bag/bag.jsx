import React from 'react';
import BagOrderItem from './bag_order_item';
import BagPricing from './bag_pricing';
import FindChipotleContainer from '../find_chipotle/find_chipotle_container';
import { NavLink } from "react-router-dom";

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
      
    const renderBag = () => {
        if (this.props.orders.length > 0) {
            debugger;
            return (
              <div id="bagModal" className="bag-modal">
                <div className="bag-modal-content">
                  <div className="bag-modal-header">
                    <div className="bag-header-top">
                      <FindChipotleContainer modalType={this.props.modal} />
                      <span
                        className="bag-modal-close-button"
                        onClick={this.handleClick}
                      >
                        x
                      </span>
                    </div>
                    <div className="bag-header-bottom">
                      <span>Make it a group order</span>
                    </div>
                  </div>
                  <div className="bag-main">
                    <div className="bag-main-container">
                        {this.state.orders}
                        <div className="bag-order-complete-header">
                        <span>Complete Your Meal</span>
                        </div>
                        <div className="bag-complete-meals">
                        <div className="bag-upsell-item">
                            <img
                            src="https://poblano-app-seeds.s3.amazonaws.com/tortillachips.png"
                            alt="chips"
                            />
                            <span>Chips</span>
                            <span>$1.55</span>
                        </div>
                        <div className="bag-upsell-item">
                            <img
                            src="https://poblano-app-seeds.s3.amazonaws.com/chipsguac.png"
                            alt="chips-and-guac"
                            />
                            <span>Chips and Guac</span>
                            <span>$3.85</span>
                        </div>
                        <div className="bag-upsell-item">
                            <img
                            src="https://poblano-app-seeds.s3.amazonaws.com/blackberry.png"
                            alt="blackberry"
                            />
                            <span>Blackberry Fizz</span>
                            <span>$3.40</span>
                        </div>
                        </div>
                        <div className="bag-order-add-item">
                        <button>Add Another Menu Item</button>
                        </div>
                    </div>
                    <BagPricing bagTotal={this.state.totalBagPrice} />
                  </div>
                  <div className="bag-checkout">Checkout</div>
                </div>
              </div>
            )
        } else {
            return (
              <div id="bagModal" className="bag-modal">
                <div className="bag-modal-content-no-order">
                  <div className="bag-modal-header-no-order">
                    <div className="bag-header-top">
                      <FindChipotleContainer modalType={this.props.modal} />
                      <span
                        className="bag-modal-close-button"
                        onClick={this.handleClick}
                      >x
                      </span>
                    </div>
                    <div className="bag-modal-separator">
                      <span>_________________</span>
                    </div>
                    <div className="bag-modal-directions">
                        Start an order for yourself, or you and your friends.
                    </div>
                    <img src={window.tinyLogo} alt="logo" className="bag-modal-logo"/>
                    <div className="bag-modal-start">
                        <NavLink className="start-order-button" to="/order" onClick={this.handleClick}>
                          Order now
                        </NavLink>
                    </div>
                    <div className="bag-header-bottom">
                      <span>Invite Others</span>
                    </div>
                  </div>
                </div>
              </div>
            );
        }
    };

    return (
        <>
            {renderBag()}
        </>
    );
  }
};

export default Bag;