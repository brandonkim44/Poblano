import React from 'react';

export const IngredientItem = (props) => {
    return (
        <li>
            <figure className="figure">
                <img
                    src={props.ingredient.photoUrl}
                    className="ingredient-img"
                    alt={props.ingredient.ingredientName}
                    data-fats={props.ingredient.fats}
                    data-protein={props.ingredient.protein}
                    data-calories={props.ingredient.calories}
                    data-carbs={props.ingredient.carbs}
                    onClick={props.updateState()}
                ></img>
                <div className="ingredient-name">{props.ingredient.ingredientName}</div>
            </figure>
        </li>
    )
};