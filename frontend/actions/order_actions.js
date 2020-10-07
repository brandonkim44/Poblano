import * as APIUtil from '../util/order_api_util';
import { openModal } from './modal_actions';

export const RECEIVE_SIDE_INGREDIENTS = "RECEIVE_SIDE_INGREDIENTS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";

export const receiveSideIngredients = sideIngredients => {
    return ({
        type: RECEIVE_SIDE_INGREDIENTS,
        sideIngredients
    });
};

const addOrder = (order) => {
    return ({
        type: RECEIVE_ORDER,
        order
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

export const addOrderToBag = (order) => dispatch => {
        dispatch(addOrder(order))
        dispatch(openModal("order"))
}