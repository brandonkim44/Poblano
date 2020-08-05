import * as APIUtil from '../util/nutrition_api_util';

export const RECEIVE_INGREDIENTS = "RECEIVE_INGREDIENTS";
export const RECEIVE_MEALS = "RECEIVE_MEALS";

export const receiveIngredients = ingredients => {
    return ({
        type: RECEIVE_INGREDIENTS,
        ingredients
    });
};

export const receiveMeals = meals => {
    return ({
        type: RECEIVE_MEALS,
        meals
    })
}

// export const receiveFetchErrors = payload => {
//     return ({
//         type: RECEIVE_FETCH_ERRORS,
//         payload
//     });
// }

export const fetchIngredients = id => dispatch => {
    return (
        APIUtil.fetchIngredients(id)
            .then(ingredients => { 
                debugger;
                return (dispatch(receiveIngredients(ingredients)))
            })
    );
};

export const fetchMeals = () => dispatch => {
    return (
        APIUtil.fetchMeals()
            .then(meals => {
                debugger;
                return (dispatch(receiveMeals(meals)))
            })
    );
};

// , promise => dispatch(receiveErrors(promise.responseJSON))
//how to avoid nesting it twice?? this feels hacky