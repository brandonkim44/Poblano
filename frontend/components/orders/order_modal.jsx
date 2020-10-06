import React from 'react';

export const OrderModal = () => {
    return (
        <div id="orderModal" className="order-modal">
            <div className="order-modal-content">
                <span>Give this meal a name</span>
                <input 
                    type="text" 
                    name="orderText" 
                    id="orderText"
                />
                <div className="order-modal-buttons">
                    <button className="order-cancel-btn">Cancel</button>
                    <button className="order-save-btn">Save</button>
                </div>
            </div>
        </div>
    )
};  