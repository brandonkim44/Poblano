import { connect } from 'react-redux';
import OrderShow from './order_show';

const mapStateToProps = state => {
    const mealName = Object.keys(state.entities.ingredients)[0];
    let mealDescription = null;
    let mealPhoto = null;
    if (mealName) {
        mealDescription = state.entities.meals[mealName].description;
        mealPhoto = state.entities.meals[mealName].photoUrl;
    }
    const ingredients = state.entities.ingredients[mealName];
    return ({
        mealName: mealName,
        mealDescription: mealDescription,
        mealPhoto: mealPhoto,
        ingredients: ingredients ? Object.keys(ingredients) : {},
        fillings: ingredients ? ingredients["Fillings"] : {},
        riceAndBeans: ingredients ? ingredients["Rice & Beans"] : {},
        toppings: ingredients ? ingredients["Top it off"] : {},
        lifestyleBowls: ingredients ? ingredients["Bowls"] : {},
        sides: ingredients ? ingredients["Sides"] : {},
        drinks: ingredients ? ingredients["Drinks"] : {}
    });
};

const mapDispatchToProps = dispatch => {
    return ({

    });
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderShow);