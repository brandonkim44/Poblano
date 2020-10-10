import React from 'react';
import { pick } from 'lodash';
import { FILLINGS, RICE, BEANS, RICE_AND_BEANS, TOP_IT_OFF, SIDES, DRINKS } from '../../util/sections_ingredients';
// import { openModal } from '../../actions/modal_actions';
import { addOrderToBag } from '../../actions/order_actions';

//might have to make this a class component

const userId = 'userId';
const storeId = 'storeId';
const price = 'price';
const details = 'details';

export const OrderFooter = (props) => {
    let hasFillings = false;
    let hasRice = false;
    let hasBeans = false;
    let displayText = [];
    let state = props.orderState;
    let mealIngredients = [];
    let sidesSlice = {};
    let lifestyleSlice = {};

    let order = pick(state, [userId, storeId, price, details]);

    const handleSubmit = (e) => {
        e.stopPropagation();
        const ingredients = document.querySelectorAll(".ingredient-img-clicked");
        (hasCompleteOrder(ingredients)) ? showModal(ingredients) : displayWarning();
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
        
        for (let i = 0; i < ingredients.length; i++) {
            let ingredientName = ingredients[i].dataset.ingredientname;
            if (FILLINGS.includes(ingredientName) || RICE_AND_BEANS.includes(ingredientName) || TOP_IT_OFF.includes(ingredientName)) {
                mealIngredients.push(ingredientName);
            } else if (SIDES.includes(ingredientName) || DRINKS.includes(ingredientName)) {
                createSlice(ingredients[i], "sides");
            } else if (LIFESTYLE.includes(ingredientName)) {
                createSlice(ingredients[i], "lifestyle");
            }
        }
    };

    const createListOfIngredients = () => {
        return mealIngredients.join(", ");
    };
    
    const createSlice = (ingredient, type) => {
        let ingredientName = ingredient.dataset.ingredientname;;
        let ingredientPrice = ingredient.dataset.price;
        type === "sides"
          ? (sidesSlice[ingredientName] = parseInt(ingredientPrice))
          : (lifestyleSlice[ingredientName] = parseInt(ingredientPrice));
    };

    const createOrderState = (ingredients) => {
        separateIngredients(ingredients);
        let listOfIngredients = createListOfIngredients();

        order[details] = listOfIngredients;
        order["sides"] = sidesSlice;
        order["lifestyles"] = lifestyleSlice;
        order["mealName"] = props.mealName;
        order[price] = parseInt(props.price);
        return order;
    };

    const showModal = (ingredients) => {
        document.body.className = "modal-open";
        order = createOrderState(ingredients);
        dispatch(addOrderToBag(order));

        // root reducer will make 
        // {
            //orders: 

        // }

        // order reducer will count num of objects and inc by 1 for the key of new added object
        // desired state of order
        // {
            // orders:
            // {
                // 1: {
                    //orderId: num
                    //userId: null,
                    //storeId: 0,
                    //price: 9.40,
                    //details: [fillings, rice, beans, toppings] or "Fillings, rice, beans"
                    //mealName:
                    //sides: {
                    // "name of side": 1.55,
                    // "name of side": 2.65
                    // }
                    // lifestyles: {
                    //  "name of lifestyle bowl": 11.20,
                    //  "name of lifestyle bowl": 8.67
                    // need description
                    // orderName: "brandon"
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