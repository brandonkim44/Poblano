import React from 'react';
import { addOrderToBag } from '../../actions/order_actions';

export const OrderIngredientItem = (props) => {

    // const createOrderState = () => {
    //     let order = {};
        
    // };

    // const handleClick = () => {
    //     const order = createOrderState();
    //     dispatch(addOrderToBag(order));
    // };
    
    const showLifeBowlIngredients = () => {
    
        if (props.mealName === "lifestyle") {
            let ingredientDescription;
            if (props.ingredient.details) ingredientDescription = props.ingredient.details.join(", ");
            return (
                <div>{ingredientDescription}</div>
            )
        } else {
            return null;
        }
    };

    return (
        <li>
            <figure className="figure">
                <img
                    src={props.ingredient.photoUrl}
                    className="ingredient-img"
                    alt={props.ingredient.ingredientName}
                    data-ingredientname={props.ingredient.ingredientName}
                    data-price={props.ingredient.price}
                    onClick={(e) => props.handleClick(e)}
                ></img>
                <div className="ingredient-name">{props.ingredient.ingredientName}</div>
                {showLifeBowlIngredients()}
            </figure>
        </li>
    )
};