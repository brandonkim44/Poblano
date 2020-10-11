import React from 'react';
import { addNameToOrder, removeOrderFromBag } from '../../actions/order_actions';

// make this a class
// have state
// setState for input value and then pass field into handleSubmit

export const OrderModal = (props) => {

    const clickCancel = () => {
        document.body.className = "modal-close";
        dispatch(removeOrderFromBag(props.orderId));
    };
    
    const clickSave = (e) => {
        let inputBox = document.querySelector("#orderText");
        if (inputBox.value.length === 0) return;
        document.body.className = "modal-open";
        debugger;
        dispatch(addNameToOrder(inputBox.value, props.orderId));
    }

    const handleBlurAndFocus = () => {
        return e => {
            let currentText = e.currentTarget.value;
            if (currentText.length === 0) {
                e.currentTarget.placeholder = "Meal Name Is Required";
                e.currentTarget.className = "mealname-required-focused";
            } else {
                e.currentTarget.className = "mealname-box";
            }
        }
    };

    const handleInput = ()  => {
        return e => {
            let currentText = e.currentTarget.value;
            let inputLabel = document.querySelector(".order-modal-label");
            if (currentText.length > 0 && currentText.length <= 20) {
                inputLabel.style.visibility = 'visible';
                //return
            } else {
                inputLabel.style.visibility = "hidden";
            }
        }
    };

    const handleSubmit = (e) => {

    };

    return (
        <div id="orderModal" className="order-modal">
            <div className="order-modal-content">
                <span className="order-modal-header">Give this meal a name</span>
                <span className="order-modal-label">Enter a Meal Name</span>
                <input
                    className="mealname-box"
                    type="text" 
                    name="orderText" 
                    id="orderText"
                    placeholder="Enter a Meal Name"
                    onChange={handleInput()}
                    onBlur={handleBlurAndFocus()}
                    onFocus={handleBlurAndFocus()}
                    maxLength="20"
                />
                <div className="order-modal-buttons">
                    <button className="order-cancel-btn" onClick={() => clickCancel()}>Cancel</button>
                    <button className="order-save-btn" onClick={(e) => clickSave(e)}>Save</button>
                </div>
            </div>
        </div>
    )
};  