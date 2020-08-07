import React from 'react';
import MealContainer from './meal_container';

class NutritionLanding extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="nutrition-calculator-container">
                    <div className="nutrition-header">
                        <h1 className="nutrition-header-title">NUTRITION CALCULATOR</h1>
                        <span className="nutrition-header-description">Special diet? Allergies? 
                        Counting calories? Just wanna know more about the best order on earth? 
                        Find out exactly how your meal stacks up, down to the ingredient.</span>
                    </div>
                    <div className="nutrition-entrees-container">
                        <MealContainer />
                    </div>
                </div>
                {/* component for ingredients */}
            </div>
        );
    }
};

export default NutritionLanding;