import React from 'react';
import { openModal } from '../../actions/modal_actions';
import OrderLanding from "../orders/order_landing";

const MainLandingPage = () => {
    return (
      <div className="main-page-container">
        <div className="guac-banner">
          <img className="guac-img" src={window.guac} alt="guac" />
          <h1 className="guac-pre-title">- Be Extra -</h1>
          <h1 className="guac-title">National Avocado Day </h1>

          <div className="main-advertisement-container">
            <img
              className="main-poblano-simple-logo"
              src={window.PoblanoLogoSimple}
              alt="poblano-logo-simple"
            />
            <h2>JOIN POBLANO REWARDS. UNWRAP SOME FREE POBLANO.</h2>
            <div className="main-create-signin">
              <span
                className="main-create"
                onClick={() => dispatch(openModal("signup"))}
              >
                CREATE AN ACCOUNT
              </span>
              <span className="main-or">OR</span>
              <span
                className="main-signin"
                onClick={() => dispatch(openModal("signin"))}
              >
                SIGN IN
              </span>
            </div>
          </div>
        </div>
        <div className="main-page-order-container">
          <div>Ready to Order?</div>
          <div>
            <span>Order now</span>
          </div>
        </div>
        <div className="main-page-promo-container">
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="checkout-chipotle">
          <h1>Checkout Chipotle's Website</h1>
          <div className="chipotle-website-image">
            <div className="lifestyle-bowl-information-container">
              <div className="lifestyle-ingredient-name">
                {/* {props.ingredient.ingredientName} */}
              </div>
              <div className="lifestyle-price-cals">
                <div className="lifestyle-ingredient-calories">
                </div>
              </div>
              <div className="lifestyle-bowl-details">
                {/* {props.ingredient.details.join(", ")} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MainLandingPage;