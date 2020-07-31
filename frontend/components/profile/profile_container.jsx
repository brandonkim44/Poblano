import { connect } from "react-redux";
import Profile from './profile';
import { closeModal } from '../../actions/modal_actions';
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state) => {
    debugger;
    return ({
        currentUser: state.entities.users[state.session.id] ? state.entities.users[state.session.id] : {}
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);