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


export default mealReducer;