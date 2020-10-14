import React from "react";

export const OrderIngredientItemLifestyle = (props) => {

//   const showLifeBowlIngredients = () => {
//     if (props.mealName === "lifestyle") {
//       let ingredientDescription;
//       if (props.ingredient.details)
//         ingredientDescription = props.ingredient.details.join(", ");
//       return <div>{ingredientDescription}</div>;
//     } else {
//       return null;
//     }
//   };

  const displayPrice = () => {
    const price = parseFloat(props.ingredient.price);
    if (price > 0)
      return <div className="lifestyle-ingredient-price">${price.toFixed(2)}</div>;
  };

  const styleLifestyleBowl = () => {
    return { 
        backgroundImage: `url(${props.ingredient.photoUrl})`, 
        width: 300,
        height: 200,
        backgroundPosition: "center 0.28px",
        backgroundSize: "150%",

    }
  };

  return (
    <li className="lifestyle-ingredient-li">
      <figure className="figure">
        <div
          src={props.ingredient.photoUrl}
          className="ingredient-img"
          alt={props.ingredient.ingredientName}
          data-ingredientname={props.ingredient.ingredientName}
          data-price={props.ingredient.price}
          data-calories={props.ingredient.calories}
          onClick={(e) => props.handleClick(e)}
          style={styleLifestyleBowl()}
        >
            <div
                className="ingredient-selected"
                style={{
                backgroundImage: `url(https://poblano-app-seeds.s3.amazonaws.com/selection.png)`,
                }}
            ></div>
            <div className="lifestyle-bowl-information-container">
                <div className="lifestyle-ingredient-name">
                    {props.ingredient.ingredientName}
                </div>
                <div className="lifestyle-price-cals">
                    <div className="lifestyle-ingredient-calories">
                        <span>{props.ingredient.calories} cal</span>
                    </div>
                    <span>|</span>
                    {displayPrice()}
                </div>
                <div className="lifestyle-bowl-details">
                    {props.ingredient.details.join(", ")}
                </div>
            </div>
        </div>
      </figure>
    </li>
  );
};
