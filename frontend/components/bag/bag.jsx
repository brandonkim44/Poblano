import React from 'react';
import { BagOrderItem } from './bag_order_item';
 
class Bag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const renderOrders = () => {
            const orders = this.props.orders.map((order) => {
                const sidesNames = Object.keys(order.sides);
                return (
                    <li key={order.orderId}>
                        orderName: {order.orderName}
                        mealtype: {order.mealName}
                        price: {order.price}
                        details: {order.details}
                        a side: {sidesNames[0]}
                    </li>
                )
            });
            return orders;
        };
        
        return (
            <div>
                TESTING
                {renderOrders()}
            </div>
        //     <div id="bagModal" className="bag-modal">
        //     <div className="bag-modal-content">
        //         <span className="order-modal-header">Give this meal a name</span>
        //         <span className="order-modal-label">Enter a Meal Name</span>
        //         <input
        //             className="mealname-box"
        //             type="text" 
        //             name="orderText" 
        //             id="orderText"
        //             placeholder="Enter a Meal Name"
        //             onChange={handleInput()}
        //             maxLength="20"
        //         />
        //         <div className="order-modal-buttons">
        //             <button className="order-cancel-btn" onClick={() => clickCancel()}>Cancel</button>
        //             <button className="order-save-btn" onClick={(e) => clickSave(e)}>Save</button>
        //         </div>
        //     </div>
        // </div>
        )
    }
};

export default Bag;