import { RECEIVE_MEALS } from '../actions/nutrition_actions';

const mealReducer = (state = {}, action) => {
    debugger;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MEALS:
            debugger;
            return action.meals;
        default:
            return state;
    }
};

//should i have two slices of states: one for "meal" => array of ingredients and another for "meals" => all the meals

export default mealReducer;