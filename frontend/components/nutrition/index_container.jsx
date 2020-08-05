import { connect } from 'react-redux';
import Index from './index';
import { fetchMeals } from '../../actions/nutrition_actions';

const mapStateToProps = state => {
    return ({
        meals: state.entities.meals
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchMeals: () => dispatch(fetchMeals())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);