import { connect } from 'react-redux';
import OrderShow from './order_show';
import { fetchSideIngredients } from '../../actions/order_actions';

const mapStateToProps = state => {
    const mealName = Object.keys(state.entities.ingredients)[0];
    const sides = state.entities.ingredients.sides;
    let mealDescription = null;
    let mealPhoto = null;
    let sidesId = null;
    if (mealName) {
        mealDescription = state.entities.meals[mealName].description;
        mealPhoto = state.entities.meals[mealName].photoUrl;
        sidesId = state.entities.meals["sides"].id;
    }
    let sideIngredients = {};
    if (sides) {
        sideIngredients = sides;
    }
    const ingredients = state.entities.ingredients[mealName];
    return ({
        mealName: mealName,
        mealDescription: mealDescription,
        mealPhoto: mealPhoto,
        sidesId: sidesId,
        ingredients: ingredients ? Object.keys(ingredients) : {},
        fillings: ingredients ? ingredients["Fillings"] : {},
        riceAndBeans: ingredients ? ingredients["Rice & Beans"] : {},
        toppings: ingredients ? ingredients["Top it off"] : {},
        lifestyleBowls: ingredients ? ingredients["Bowls"] : {},
        sides: (ingredients && (mealName === ("sides"))) ? ingredients["Sides"] : sideIngredients,
        drinks: ingredients ? ingredients["Drinks"] : {}
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchSideIngredients: (sidesId) => dispatch(fetchSideIngredients(sidesId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderShow);