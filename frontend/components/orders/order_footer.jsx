import React from 'react';
import { pick } from 'lodash';
import { FILLINGS, RICE, BEANS } from '../../util/sections_ingredients';
// import { openModal } from '../../actions/modal_actions';
import { addOrderToBag } from '../../actions/order_actions';

//might have to make this a class component
export const OrderFooter = (props) => {
    let hasFillings = false;
    let hasRice = false;
    let hasBeans = false;
    let displayText = [];
    let state = props.orderState;
    const order = pick(state, ['userId', 'storeId', 'price', 'details']);

    const handleSubmit = (e) => {
        e.stopPropagation();
        const ingredients = document.querySelectorAll(".ingredient-img-clicked");
        (hasCompleteOrder(ingredients)) ? showModal(ingredients) : displayWarning();
        //need mealname from props like "Chicken Burrito" and price
        //logic that checks to see if userId, storeId, price, and details are valid <= should be validated by server
        // if all valid, then dispatch this action to reducer -> so it can then be added to global redux state under session

            // separate selected ingredients into mealIngredients and sideDrinkIngredients based off of inclusion for names and push into arrays
            
        
    }

    const hasCompleteOrder = (ingredients) => {
        if (props.mealName === "lifestyle") {
          return hasLifeStyle(ingredients);
        } else if (props.mealName === "sides") {
          return hasSidesDrinks(ingredients);
        } else {
          return hasFillingsRiceBeans(ingredients);
        }
    };

    const hasFillingsRiceBeans = (ingredients) => {
        ingredients.forEach((ingredient) => {
          let ingredientName = ingredient.dataset.ingredientname;
          if (FILLINGS.includes(ingredientName)) hasFillings = true;
          if (RICE.includes(ingredientName)) hasRice = true;
          if (BEANS.includes(ingredientName)) hasBeans = true;
        });

        if (hasFillings && hasRice && hasBeans) return true;

        if (!hasFillings && !hasRice && !hasBeans) {
          displayText = ["Please choose your protein or veggie, rice, and beans"];
        } else {
          displayText.push("Please choose your");
          if (!hasFillings) displayText.push("protein or veggie");
          if (!hasRice) displayText.push("rice");
          if (!hasBeans) displayText.push("beans");
        }

        if (displayText.length > 2) {
          displayText.splice(2, 0, "and");
          displayText = displayText.join(" ");
          return false;
        } else if (displayText.length === 2) {
          displayText = displayText.join(" ");
          return false;
        }
    };

    const hasLifeStyle = (ingredients) => {
        if (ingredients.length > 0) {
            return true;
        } else {
            displayText = "Please select a lifestyle bowl";
            return false;
        }
    };

    const hasSidesDrinks = (ingredients) => {
        if (ingredients.length > 0) {
            return true;
        } else {
            displayText = "Select an item to get started";
            return false;
        }
    };

    const separateIngredients = (ingredients) => {
        const mealIngredients = [];
        const sideDrinkIngredients = [];
        let obj = {};
        // obj[ingredient.dataset.ingredientname] = ingredient.dataset.price;
        ingredientMealList.push(obj);
    };

    const createOrderState = () => {

    };

    const showModal = () => {
        document.body.className = "modal-open";
        addOrderToBag(order);

        // state of order
        // {
            // orders:
            // {
                // 1: {
                    //userId:
                    //storeId:
                    //price:
                    //details: [fillings, rice, beans, toppings]
                    //mealName:
                    //sides: {
                    // "name of side": 1.55,
                    // "name of side": 2.65
                    // }
                // }
            // }
        //}
    };


    const displayWarning = () => {
        alert(displayText);
    };

    return (
        <div className="order-footer">
            <div className="order-footer-left">
                <h1>YOUR MEAL</h1>
                <br/>
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