import React from 'react';
import { pick } from 'lodash';

//might have to make this a class component
export const OrderFooter = (props) => {


    let state = props.orderState;

    const order = pick(state, ['userId', 'storeId', 'price', 'details']);
    
    const handleSubmit = (e) => {
        // logic to check if one of the fillings, rice, and beans pics have been clicked
        //logic that checks to see if userId, storeId, price, and details are valid
        // if all valid, then dispatch this action to reducer -> so it can then be added to global redux state under session
    }

    return (
        <div className="order-footer">
            <div className="order-footer-left">
                <h1>YOUR MEAL</h1>
                <span>{props.orderDetails}</span>
            </div>
            <div className="order-footer-right">
                <button className="order-footer-btn" onClick={(e) => handleSubmit(e)}>
                    ADD TO BAG
                </button>
            </div>
        </div>
    )
};