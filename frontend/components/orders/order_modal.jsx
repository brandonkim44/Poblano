import React from 'react';

// make this a class
// have state
// setState for input value and then pass field into handleSubmit

export const OrderModal = () => {

    const onCancelClick = (e) => {
      // open hidden modal, listen for cancel, which you can just hide modal,

      // if they click save, then invoke separateIngredients(), and
      // dispatch action and add to redux state, which will then prompt open side modal where bag is added
      separateIngredients(ingredients);
    };

    const onSaveClick = (e) => {

    }

    const handleBlur = () => {
        return e => {
            let currentText = e.currentTarget.value;
            if (currentText.length === 0) {
                e.currentTarget.placeholder = "Meal Name Is Required";
                e.currentTarget.className = "input-required-focused";
            } else {
                e.currentTarget.className = "order-modal-label";
            }
        }
    };

    const handleFocus = () => {
        return (e) => {
          let currentText = e.currentTarget.value;
          if (currentText.length === 0) {
            e.currentTarget.placeholder = "Meal Name Is Required";
            e.currentTarget.className = "mealname-required-focused";
          } else {
            e.currentTarget.className = "order-modal-label";
          }
        };
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
                    onBlur={handleBlur()}
                    onFocus={handleFocus()}
                />
                <div className="order-modal-buttons">
                    <button className="order-cancel-btn" onClick={(e) => onCancelClick(e)}>Cancel</button>
                    <button className="order-save-btn" onClick={(e) => onSaveClick(e)}>Save</button>
                </div>
            </div>
        </div>
    )
};  