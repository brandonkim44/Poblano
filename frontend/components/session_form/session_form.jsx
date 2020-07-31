import React from 'react';
import { login } from '../../util/session_api_util';
import SessionFormItem from './session_form_items';
import { times } from 'lodash';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.input;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentWillMount() {
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.submitForm(user).then(this.props.closeModal);
    }

    handleInput(field) {
        //might want to implement a debounce 
        return e => {
            if (e.target.value === "") {
                e.currentTarget.firstChild.className = "hidden";
            } else {
                e.currentTarget.firstChild.className = "shown";
            }
            e.target.classname = "input";
            this.setState({ [field]: e.target.value })
        }
    }

    handleDemo() {
        const demoUser = {
            email: "demologin@gmail.com",
            password: "password"
        }
        this.props.login(demoUser).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>{error}</li>
                ))}
            </ul>
        )
    }

    _onBlur(updateBlur, field) {
        return e => {
            if (field === "Password") {
                let children = e.currentTarget.childNodes;
                children[1].className = "hidden";
            }
            e.target.placeholder = `${field} Required`
            e.target.className = `input-${field}-required`
            this.state.updateBlur ? this.setState({ [updateBlur]: false }) : this.setState({ [updateBlur]: true })
        }
    }

    _onFocus(updateFocus, field) {
        return e => {
            if (field === "Password") {
                let children = e.currentTarget.childNodes;
                children[1].className = "show";
            }
            e.target.placeholder = `${field} Required`
            e.target.className = `input-${field}-required-focused`
            this.state.updateFocus ? this.setState({ [updateFocus]: false }) : this.setState({ [updateFocus]: true })
        }
    }

    signInForm() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div onChange={this.handleInput('email')}>
                        <div className="hidden">Email</div>
                        <input className="input" type="text" placeholder="Email" onChange={this.handleInput('email')}/>
                    </div>
                    <br />
                    <div onChange={this.handleInput('password')}>
                        <div className="hidden">Password</div>
                        <input className="input" type="password" placeholder="Password" onChange={this.handleInput('password')}/>
                    </div>
                    <br />
                    <input className="signin-button" type="submit" value={this.props.formType} />
                    <br />
                </form>
                    <button className="signin-button" onClick={() => this.handleDemo()}>Demo Login</button>
                {this.renderErrors()}
            </div>
        );
    }

    signUpForm() {

        //maybe refactor so each input is a sessionFormItem that can be passed all the properties and then just renderSessionFormItem()
        
        return(
            <div>
                <h3 className="signup-message">Create an account so you can get rewards and order your favorites even faster.</h3>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <div onChange={this.handleInput('firstName')}>
                        <div className="hidden">First Name</div>
                        <input className="input" type="text" placeholder="First Name" onBlur={this._onBlur('updateBlur', "First Name")} onFocus={this._onFocus('updateFocus', "First Name")}/>
                    </div>
                    <br />
                    <div onChange={this.handleInput('lastName')}>
                        <div className="hidden">Last Name</div>
                        <input className="input" type="text" placeholder="Last Name" onBlur={this._onBlur('updateBlur', "Last Name")} onFocus={this._onFocus('updateFocus', "Last Name")}/>
                    </div>
                    <br />
                    <div onChange={this.handleInput('email')}>
                        <div className="hidden">Email</div>
                        <input className="input" type="text" placeholder="Email" onBlur={this._onBlur('updateBlur', "Email")} onFocus={this._onFocus('updateFocus', "Email")}/>
                    </div>
                    <br />
                    <div onChange={this.handleInput('password')} onBlur={this._onBlur('updateBlur', "Password")} onFocus={this._onFocus('updateFocus', "Password")}>
                        <div className="hidden">Password</div>
                        <div className="hidden">
                            Create a password with these requirements:
                            <span>8 characters&nbsp;ABC&nbsp;abc&nbsp;123&nbsp;!@</span>
                        </div>
                        <input className="input" type="password" placeholder="Password"/>
                    </div>
                    <br />
                    <div onChange={this.handleInput('phoneNumber')}>
                        <div className="hidden">Phone Number</div>
                        <input className="input" type="text" placeholder="Phone Number" onBlur={this._onBlur('updateBlur', "Phone Number")} onFocus={this._onFocus('updateFocus', "Phone Number")}/>
                    </div>
                    <br />
                    <label>
                        <input type="radio" defaultChecked value="false" name="country" onChange={this.handleInput('country')} />
                        United States
                    </label>
                    <label>
                        <input type="radio" value="false" name="country" onChange={this.handleInput('country')} />
                        Canada
                    </label>
                    <br />
                    <input type="submit" className="signup-button" value={this.props.formType} />
                </form>
                {this.renderErrors()}
            </div>
        );
    }

    render() {
        const form = this.props.formType === 'SIGN IN' ? (
            this.signInForm()
        ) : (
            this.signUpForm()
            );
        
        return (
            <div>
                <h1 className="heading">{this.props.formType}</h1>
                {form}
                {this.props.otherForm}
            </div>
        );
    }
};

export default SessionForm;