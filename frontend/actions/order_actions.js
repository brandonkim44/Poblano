import * as APIUtil from '../util/order_api_util';

export const RECEIVE_SIDE_INGREDIENTS = "RECEIVE_SIDE_INGREDIENTS";

export const receiveSideIngredients = sideIngredients => {
    return ({
        type: RECEIVE_SIDE_INGREDIENTS,
        sideIngredients
    });
};

export const fetchSideIngredients = (sidesId) => dispatch => {
    return (
        APIUtil.fetchSideIngredients(sidesId)
            .then(sideIngredients => {
                return (dispatch(receiveSideIngredients(sideIngredients)))
            })
    );
};