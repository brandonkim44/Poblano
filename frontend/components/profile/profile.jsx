import React from 'react';
import { times } from 'lodash';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    greetingMessage() {
        currentUser.id ? (
            <div className="header-left-container-greeting">
                <div className="header-left-container-sign-in">
                    <h4 className="sign-in-header">HEY {this.props.currentUser.firstName}</h4>
                </div>
            </div>
        ) : (
            null
        )
    }

    progress() {
        currentUser.id ? (
            <div className="progress-container">
                <div className="points">
                    {this.props.currentUser.rewardPoints} /  1250
                    </div>
                <br />
                <span>{this.props.currentUser.rewardPoints} until your next reward</span>
            </div>
        ) : (
            null
        )
    }

    handleClick() {
        this.props.closeModal();
        this.props.logout();
    }

    render() {
        return (
            <div>
                {/* {this.greetingMessage()} */}
                <br/>
                {/* {this.progress()} */}
                <br />
                <span className="sign-out-button" onClick={this.handleClick}>Sign out</span>
            </div>
        );
    }
};

export default Profile;