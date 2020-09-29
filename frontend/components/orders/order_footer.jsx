import React from 'react';

export const OrderFooter = (props) => {

    // const handleClick = (props) => {
    //     return (
    //         save order object to local storage
    //     )
    // }

    return (
        <div className="order-footer">
            <div className="order-footer-left">
                <h1>YOUR MEAL</h1>
                <span>Select a protein or veggie to get started</span>
                {/* meal description from props which gets it from this.state. The default should be " Select a protein or veggie to get started"*/}
            </div>
            <div className="order-footer-right">
                <button className="order-footer-btn">
                    ADD TO BAG
                </button>
            </div>
        </div>
    )
};