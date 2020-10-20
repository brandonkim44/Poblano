import React from 'react';
import MainLandingPage from './main_landing_page';
import NutritionLandingContainer from '../nutrition/nutrition_landing_container';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import RewardContainer from '../rewards/reward_container';
import OrderLanding from '../orders/order_landing';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
          <main className="main-container">
              <Switch>
                <Route
                  exact
                  path="/nutrition-calculator"
                  component={NutritionLandingContainer}
                />
                <Route exact path="/rewards" component={RewardContainer} />
                <Route exact path="/order" component={OrderLanding} />
                <Route exact path="/" component={MainLandingPage} />
              </Switch>
          </main>
        );
    }
};

export default Main;