import React from 'react';
import OrderMealContainer from './order_meal_container';

class OrderLanding extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="nutrition-calculator-container">
                    <div className="order-entrees-container">
                        <OrderMealContainer />
                    </div>
                </div>
            </div>
        );
    }
};

export default OrderLanding;