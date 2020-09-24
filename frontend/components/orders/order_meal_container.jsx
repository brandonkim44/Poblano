import { connect } from 'react-redux';
import OrderMeal from './order_meal';
import { fetchMeals } from '../../actions/nutrition_actions';


const mapStateToProps = (state) => {
    return ({
        page: "index"
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchMeals: () => dispatch(fetchMeals())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderMeal);