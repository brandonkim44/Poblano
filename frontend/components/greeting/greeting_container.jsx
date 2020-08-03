import { connect } from 'react-redux';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ( { session, entities: { users } } ) => {
    return ({
        currentUser: session.id ? users[session.id] : {}
    });
};

const mapDispatchToProps = (dispatch) => {
    debugger;
    return({
        openModal: modal => dispatch(openModal(modal))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
