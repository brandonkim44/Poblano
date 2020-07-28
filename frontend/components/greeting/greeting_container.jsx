import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    return ({
        currentUser: users[session.id]
    })
};

const mapDispatchToProps = dispatch => {
    return({});
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
