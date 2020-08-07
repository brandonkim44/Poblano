import React from 'react';
import { openModal } from '../../actions/modal_actions';
import MainLandingPage from './main_landing_page';
import NutritionLandingContainer from '../nutrition/nutrition_landing_container';
import { Route } from 'react-router-dom';
import RewardContainer from '../rewards/reward_container';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <main className="main-container">
                <Route 
                    exact path="/nutrition-calculator" 
                    component={NutritionLandingContainer} 
                />
                <Route
                    exact path="/rewards"
                    component={RewardContainer}
                />
                <Route
                    exact path="/" 
                    component={MainLandingPage} 
                />
            </main>
        )
    }
};

export default Main;