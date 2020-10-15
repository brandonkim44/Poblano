import React from 'react';
import { times } from 'lodash';
import { ProgressBar } from '../progress_bar/progress_bar';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.rewardPointsLeft = (1250 - parseInt(this.props.currentUser.rewardPoints));
        this.percentage = Math.floor((this.rewardPointsLeft / 1250) * 100);
        this.handleClick = this.handleClick.bind(this);
    }

    greetingMessage() {
        return (
            <div className="profile-modal-greeting-container">
                <div className="header-left-container-sign-in">
                    <img className="person-outline-img" src={"https://poblano-app-seeds.s3.amazonaws.com/useroutlinehalo.png"} alt="person"/>
                    <h4 className="profile-greeting">HEY {this.props.currentUser.firstName}</h4>
                </div>
            </div>
        );
    } 

    progress() {
        return (
            <div className="progress-container">
                <div className="points">
                    {this.props.currentUser.rewardPoints} /  1250
                </div>
                <ProgressBar percentage={this.percentage} />
                <span className="points-message">{this.rewardPointsLeft} points until your next reward</span>
            </div>
        );
        
    }

    handleClick() {
        document.body.className = "modal-close"
        this.props.closeModal();
        this.props.logout();
    }

    render() {
        return (
            <div className="profile-container">
                {this.greetingMessage()}
                <br/>
                {this.progress()}
                <br />
                <span className="sign-out-button" onClick={this.handleClick}>Sign out</span>
            </div>
        );
    }
};

export default Profile;