import React from 'react';

export const OrderModal = () => {

    const onCancelClick = (e) => {
      // open hidden modal, listen for cancel, which you can just hide modal,

      // if they click save, then invoke separateIngredients(), and
      // dispatch action and add to redux state, which will then prompt open side modal where bag is added
      separateIngredients(ingredients);
    };

    const onSaveClick = (e) => {

    }

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
                    <button className="order-cancel-btn" onClick={(e) => onCancelClick(e)}>Cancel</button>
                    <button className="order-save-btn" onClick={(e) => onSaveClick(e)}>Save</button>
                </div>
            </div>
        </div>
    )
};  