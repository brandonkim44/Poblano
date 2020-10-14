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
          {showLifeBowlIngredients()}
        </figure>
      </li>
    );
};