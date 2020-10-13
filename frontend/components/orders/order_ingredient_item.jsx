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
                <div
                    src={props.ingredient.photoUrl}
                    className="ingredient-img"
                    alt={props.ingredient.ingredientName}
                    data-ingredientname={props.ingredient.ingredientName}
                    data-price={props.ingredient.price}
                    data-calories={props.ingredient.calories}
                    onClick={(e) => props.handleClick(e)}
                    style={ {backgroundImage: `url(${props.ingredient.photoUrl})`} }
                >
                </div>
                <div className="ingredient-name">{props.ingredient.ingredientName}</div>
                {showLifeBowlIngredients()}
            </figure>
        </li>
    )
};