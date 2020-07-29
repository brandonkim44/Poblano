import { connect } from 'react-redux';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
    debugger;
    return ({
        currentUser: users[session.id]
    })
};

const mapDispatchToProps = dispatch => {
    return({
        openModal: modal => dispatch(openModal(modal))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);