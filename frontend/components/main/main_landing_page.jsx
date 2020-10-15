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
          <div className="main-page-promo-container">
            <div className="main-page-promo">
                <div className="main-left-promo-container">
                    <div className="main-left-promo-header">
                        Real food is really easy
                    </div>
                    <div className="main-left-promo-description">
                        Customize, pay and skip the line with contactless pickup. Just
                        grab your sealed Chipotle order from the shelf and go.
                    </div>
                    <div className="main-left-promo-button-container">
                        <button className="main-left-promo-button">Order now</button>
                    </div>
                </div>
                <div className="main-right-promo-container"></div>
            </div>
          </div>
            <div className="checkout-chipotle">
                <h1>Checkout Chipotle's Website</h1>
                <div className="chipotle-website-image">
                    <div className="chipotle-title">
                        Chipotle
                    </div>
                </div>
                <div className="chipotle-website-container">
                    <div className="chipotle-details">
                        Inspired by Chipotle Mexican Grill.
                        All food photos and gif credits go to Chipotle's website.
                    </div>
                    <div className="chipotle-button-container">
                        <button className="main-left-promo-button">Order now</button>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default MainLandingPage;