import { connect } from 'react-redux';
import Meal from './meal';
import { fetchMeals } from '../../actions/nutrition_actions';


const mapStateToProps = (state) => {
    debugger;
    return ({
        indexPage: true,
        ingredients: state.entities.ingredients
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchMeals: () => dispatch(fetchMeals())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Meal);



// {
//     entities: {
//         users: {
//             1: { user },
//             2: { user },
//             3: { user }
//         }

//         meal: {
//             "burrito",
//                 ingredients: {
//                     barbacoa: {
//                         photoUrl: “https://example.com”,
//                         calories: 320,
//                         fat: 100,
//                         protein: 28
//                     },
//                 }
//         }

//         orders: {
//             1: {
//                 user_id: 3,
//                 store_id: 21,
//                 price: $10.05,
//                 details: "ssdsaa"
//                 meal_id: 100 ?????????????
//             },
//             2: {

//             }
//         }
//     }

//     session:

//     ui:

// }