import React from 'react';

export const OrderIngredientItem = (props) => {
    return (
        <li>
            <figure className="figure">
                <img
                    src={props.ingredient.photoUrl}
                    className="ingredient-img"
                    alt={props.ingredient.ingredientName}
                    // data-price={props.ingredient.price}
                ></img>
                <div className="ingredient-name">{props.ingredient.ingredientName}</div>
            </figure>
        </li>
    )
};