import { connect } from 'react-redux';
import OrderShow from './order_show';
import { fetchSideIngredients } from '../../actions/order_actions';

const mapStateToProps = state => {
    const mealName = Object.keys(state.entities.ingredients)[0];
    const sides = state.entities.ingredients.sides;
    const drinks = state.entities.ingredients.drinks;
    debugger;
    let mealDescription = null;
    let mealPhoto = null;
    let sidesId = null;
    // let orderDetails = { default: "Select a protein or veggie to get started" };

    if (mealName) {
        mealDescription = state.entities.meals[mealName].description;
        mealPhoto = state.entities.meals[mealName].photoUrl;
        sidesId = state.entities.meals["sides"].id;

        // if (mealName === "sides") {
        //     orderDetails = { default: "Select an item to get started" };
        // } else {
        //     orderDetails = { default: "Select a protein or veggie to get started" };
        // }
    }
    let sideIngredients = {};
    let drinkIngredients = {};

    if (sides) sideIngredients = sides;
    if (drinks) drinkIngredients = drinks;

    const ingredients = state.entities.ingredients[mealName];
    debugger;
    return ({
        currentUser: state.session.id ? state.entities.users[state.session.id] : {},
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
        drinks: (ingredients && (mealName === ("sides"))) ? ingredients["Drinks"] : drinkIngredients,
        // orderDetails: orderDetails
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchSideIngredients: (sidesId) => dispatch(fetchSideIngredients(sidesId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderShow);