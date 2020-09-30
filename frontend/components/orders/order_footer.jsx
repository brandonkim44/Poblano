import React from 'react';

export const OrderFooter = (props) => {

    return (
        <div className="order-footer">
            <div className="order-footer-left">
                <h1>YOUR MEAL</h1>
                <span>{props.orderDetails}</span>
            </div>
            <div className="order-footer-right">
                <button className="order-footer-btn">
                    ADD TO BAG
                </button>
            </div>
        </div>
    )
};