import React from 'react';

export const OrderIngredientItem = (props) => {

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
            </figure>
        </li>
    )
};