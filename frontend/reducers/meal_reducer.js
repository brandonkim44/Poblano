import { RECEIVE_MEALS } from '../actions/nutrition_actions';

const mealReducer = (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MEALS:
        
            return action.meals;
        default:
            return state;
    }
};


export default mealReducer;