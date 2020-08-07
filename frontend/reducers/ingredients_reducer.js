import { RECEIVE_INGREDIENTS } from '../actions/nutrition_actions';
import { FILLINGS, RICE_AND_BEANS, TOP_IT_OFF, INCLUDED, LIFESTYLE, SIDES, DRINKS } from '../util/sections_ingredients';

const ingredientsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_INGREDIENTS:
            const mealName = Object.entries(action.ingredients)[0][0];
            const ingredientsArr = Object.entries(action.ingredients)[0][1];
            const topItOffArr = [];
            const fillingsArr = [];
            const riceBeansArr = [];
            const includedArr = [];
            const lifestyleArr = [];
            const sidesArr = [];
            const drinksArr = [];
            ingredientsArr.forEach( ingredient => {
                if (FILLINGS.includes(ingredient.ingredientName)) {
                    fillingsArr.push(ingredient)
                } else if (RICE_AND_BEANS.includes(ingredient.ingredientName)) {
                    riceBeansArr.push(ingredient)
                } else if (TOP_IT_OFF.includes(ingredient.ingredientName)) {
                    topItOffArr.push(ingredient)
                } else if (INCLUDED.includes(ingredient.ingredientName)) {
                    includedArr.push(ingredient)
                } else if (LIFESTYLE.includes(ingredient.ingredientName)) {
                    lifestyleArr.push(ingredient)
                } else if (SIDES.includes(ingredient.ingredientName)) {
                    sidesArr.push(ingredient)
                } else if (DRINKS.includes(ingredient.ingredientName)) {
                    drinksArr.push(ingredient)
                }
            });
            const sectionedIngredients = {
                [mealName]: {
                    "Fillings": fillingsArr,
                    "Rice & Beans": riceBeansArr,
                    "Top it off": topItOffArr,
                    "Included Ingredients": includedArr,
                    "Bowls": lifestyleArr,
                    "Sides": sidesArr,
                    "Drinks": drinksArr
                }
            }
            return sectionedIngredients;
        default:
            return state;
    }
};

export default ingredientsReducer;