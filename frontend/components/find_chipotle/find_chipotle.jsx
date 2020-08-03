import React from 'react';
import { openModal } from '../../actions/modal_actions';

class FindChipotle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: false
        }
    }

    render() {

        const className = () => {
            return this.state.location ? "find-poblano-location" : "find-poblano-no-location"
        }

        return (
            <div className={className()}>
                <img className="tiny-logo" src={window.tinyLogo} alt="tiny-logo"/>
                <span className="separator">|</span>
                <span className="find-poblano-text">FIND A POBLANO</span>
                {/* <span onClick={this.props.openModal}>FIND A POBLANO</span> */}
            </div>
        )
    }
};

export default FindChipotle;