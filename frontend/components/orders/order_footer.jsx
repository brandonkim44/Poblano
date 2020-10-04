import React from 'react';
import { pick } from 'lodash';
import { FILLINGS, RICE, BEANS } from '../../util/sections_ingredients';

//might have to make this a class component
export const OrderFooter = (props) => {

    let hasFillings = false;
    let hasRice = false;
    let hasBeans = false;


    let state = props.orderState;

    const order = pick(state, ['userId', 'storeId', 'price', 'details']);

    const handleSubmit = (e) => {
        e.stopPropagation();

        //need mealname from props like "Chicken Burrito" and price
        // logic to check if one of the fillings, rice, and beans pics have been clicked
        //logic that checks to see if userId, storeId, price, and details are valid
        // if all valid, then dispatch this action to reducer -> so it can then be added to global redux state under session
        const ingredients = document.querySelectorAll(".ingredient-img-clicked");
        const ingredientMealList = [];
        const ingredientSidesDrinksList = [];
        //if ingredientname included in fillings, beans or rice
        ingredients.forEach((ingredient) => {
            let ingredientName = ingredient.dataset.ingredientname;
            if (FILLINGS.includes(ingredientName)) {
                hasFillings = true;
                //delete displayWarning from object
            }
            if (RICE.includes(ingredientName)) {
              hasRice = true;
              //delete displayWarning from object
            }
            if (BEANS.includes(ingredientName)) {
              hasBeans = true;
              //delete displayWarning from object
            }
            let obj = {};
            // obj[ingredient.dataset.ingredientname] = ingredient.dataset.price;
            ingredientMealList.push(obj);
        });
        if (hasFillings && hasRice && hasBeans) {
            //dispatch
        } else {
            //show displayWarning
        }
         // else if ingredient name is included in sides or drinks
         //push into sides or drinks array
    }

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