import React from 'react';

export const OrderIngredientItem = (props) => {

    const displayPrice = () => {
        const price = parseFloat(props.ingredient.price);
        if (price > 0) return <div className="ingredient-price">${price.toFixed(2)}</div>
    };

    return (
      <li className="ingredient-li">
        <figure className="figure">
          <div
            src={props.ingredient.photoUrl}
            className="ingredient-img"
            alt={props.ingredient.ingredientName}
            data-ingredientname={props.ingredient.ingredientName}
            data-price={props.ingredient.price}
            data-calories={props.ingredient.calories}
            onClick={(e) => props.handleClick(e)}
            style={{ backgroundImage: `url(${props.ingredient.photoUrl})` }}
          >
          <div
            className="ingredient-selected"
            style={{
              backgroundImage: `url(https://poblano-app-seeds.s3.amazonaws.com/selection.png)`,
            }}
          ></div>
            <div className="ingredient-calories">
              <span>{props.ingredient.calories} cal</span>
            </div>
          </div>
          <div className="ingredient-name">
            {props.ingredient.ingredientName}
          </div>
          {displayPrice()}
        </figure>
      </li>
    );
};