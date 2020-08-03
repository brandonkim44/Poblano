import { connect } from 'react-redux';
import FindChipotle from './find_chipotle';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return({

    });
};

const mapDispatchToProps = dispatch => {
    return ({
        openModal: (modal) => dispatch(openModal(modal))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(FindChipotle);