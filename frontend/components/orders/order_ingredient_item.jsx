import React from 'react';

export const OrderIngredientItem = (props) => {

    const showLifeBowlIngredients = () => {
        if (props.ingredient.ingredientName === "lifestyle") {
            return (
                <div>{props.ingredient.details}</div>
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
                    // data-price={props.ingredient.price}
                    onClick={(e) => props.handleClick(e)}
                ></img>
                <div className="ingredient-name">{props.ingredient.ingredientName}</div>
                {showLifeBowlIngredients()}
            </figure>
        </li>
    )
};