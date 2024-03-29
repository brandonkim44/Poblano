import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import mealReducer from './meal_reducer';
import ingredientsReducer from './ingredients_reducer';
import orderReducer from './order_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    meals: mealReducer,
    ingredients: ingredientsReducer,
    orders: orderReducer
});

export default entitiesReducer;