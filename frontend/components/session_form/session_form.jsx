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
        this.handleUpdat = this.handleUpdate.bind(this);
    }

    componentWillMount() {
        this.props.clearErrors()
    }

    handleSubmit(e) {
        //iterate through fields and check if value is empty and if empty, change classname to required for placeholder
        e.preventDefault();
        const user = Object.assign({}, this.state);
        delete user.updateFocus;
        delete user.updateBlur;
        this.props.submitForm(user).then(this.props.closeModal);
    }

    handleInput(field) {
        //might want to implement a debounce 
        return e => {
            if (e.target.value === "" && (field === "email" || field === "password" || field === "phoneNumber")) {
                e.currentTarget.firstChild.className = `hidden ${field}`;
                //refactor below code to use switch case statement

                // switch (field) {
                //     case "email":
                        
                //         break;
                
                //     default:
                //         break;
                // }
            } else if (field === "email") {
                const emailRegex = new RegExp('.+\@.+\..+');
                if (emailRegex.test(e.target.value)) {
                        e.currentTarget.firstChild.className = `hidden ${field}`
                        return e.currentTarget.childNodes[0].className = 'shown'
                } else {
                    if (arguments[1] === "signin") {
                        return e.currentTarget.firstChild.className = `shown signin ${field}`
                    } else {
                        return e.currentTarget.firstChild.className = `shown ${field}`
                    }
                }
            } else if (field === "password") {
                const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@$]).{2,}$');
                if (passwordRegex.test(e.target.value) && e.target.value.length > 7) {
                    e.currentTarget.firstChild.className = `hidden ${field}`
                    return e.currentTarget.children[2].className = 'shown'
                } else {
                    if (arguments[1] === "signin") {
                        return e.currentTarget.firstChild.className = `shown signin ${field}`

                    } else {
                        return e.currentTarget.firstChild.className = `shown ${field}`
                    }
                }
            } else if (field === "phoneNumber") {
                const phoneRegex = new RegExp('^[0-9]{9,}$');
                debugger;
                if (phoneRegex.test(e.target.value) && e.target.value.length === 10) {
                    e.currentTarget.firstChild.className = `hidden ${field}`
                    return e.currentTarget.childNodes[1].className = 'shown'
                } else {
                    return e.currentTarget.firstChild.className = `shown ${field}`
                }
            } else if (e.target.value === "") {
                return e.currentTarget.firstChild.className = "hidden"
            } else {
                return e.currentTarget.firstChild.className = "shown"
            }

            e.target.classname = "input";
        }
    }

    handleUpdate(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        };
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
                    <li className="error-message" key={`error-${idx}`}>{error}</li>
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
                children[1].className = "shown";
            }
            e.target.placeholder = `${field} Required`
            e.target.className = `input-${field}-required-focused`
            this.state.updateFocus ? this.setState({ [updateFocus]: false }) : this.setState({ [updateFocus]: true })
        }
    }

    signInForm() {
        const fillerSpace = (num) => {
            let arr = [];
            for(let i = 0; i < num; i++) { arr.push(<br/>) };
            return arr;
        };

        return (
            <div className="signInForm">
               <h1 className="heading-signin">{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div onChange={this.handleInput('email', 'signin')}>
                        <div className="hidden">Email</div>
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Email" 
                            onChange={this.handleUpdate('email')}
                        />
                    </div>
                    <br />
                    <div onChange={this.handleInput('password', 'signin')}>
                        <div className="hidden">Password</div>
                        <input 
                            className="input" 
                            type="password" 
                            placeholder="Password" 
                            onChange={this.handleUpdate('password')}
                        />
                    </div>
                    <br />
                {this.renderErrors()}
                    <input 
                        className="signin-button" 
                        type="submit" 
                        value={this.props.formType} 
                    />
                    <br />
                </form>
                    <button 
                        className="signin-button" 
                        onClick={() => this.handleDemo()}>DEMO LOGIN
                    </button>
                <span className="session-form-separator"></span>
            </div>
        );
    }

    signUpForm() {

        //maybe refactor so each input is a sessionFormItem that can be passed all the properties and then just renderSessionFormItem()
        
        return(
            <div>
                <h1 className="heading-signup">{this.props.formType}</h1>
                <h3 className="signup-message">Create an account so you can get rewards and order your favorites even faster.</h3>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <div onChange={this.handleInput('firstName')}>
                        <div className="hidden">First Name</div>
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="First Name" 
                            onBlur={this._onBlur('updateBlur', "First Name")} 
                            onFocus={this._onFocus('updateFocus', "First Name")} 
                            onChange={this.handleUpdate('firstName')}
                        />
                    </div>
                    <br />
                    <div onChange={this.handleInput('lastName')}>
                        <div className="hidden">Last Name</div>
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Last Name" 
                            onBlur={this._onBlur('updateBlur', "Last Name")} 
                            onFocus={this._onFocus('updateFocus', "Last Name")} 
                            onChange={this.handleUpdate('lastName')}
                        />
                    </div>
                    <br />
                    <div onChange={this.handleInput('email')}>
                        <div className="hidden email">Please Enter A Valid Email</div>
                        <div className="hidden">Email</div>
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Email" 
                            onBlur={this._onBlur('updateBlur', "Email")} 
                            onFocus={this._onFocus('updateFocus', "Email")} 
                            onChange={this.handleUpdate('email')}
                        />
                    </div>
                    <br />
                    <div onChange={this.handleInput('password')} onBlur={this._onBlur('updateBlur', "Password")} onFocus={this._onFocus('updateFocus', "Password")}>
                        <div className="hidden password">Please Enter A Valid Password</div>
                        <div className="hidden">
                            Create a password with these requirements:
                            <span className="password-requirement-message">&nbsp;8&nbsp;characters&nbsp;ABC&nbsp;abc&nbsp;123&nbsp;!@$</span>
                        </div>
                        <div className="hidden">Password</div>
                        <input 
                            className="input" 
                            type="password" 
                            placeholder="Password" 
                            onChange={this.handleUpdate('password')}
                        />
                    </div>
                    <br />
                    <div onChange={this.handleInput('phoneNumber')}>
                        <div className="hidden phoneNumber">Please Enter A Valid Phone Number</div>
                        <div className="hidden">Phone Number</div>
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Phone Number" 
                            onBlur={this._onBlur('updateBlur', "Phone Number")} 
                            onFocus={this._onFocus('updateFocus', "Phone Number")}
                             onChange={this.handleUpdate('phoneNumber')}
                        />
                    </div>
                    <br />
                    <div className="shown country">Country</div>
                    <div className="radio-buttons">
                        <label className="radio-button-labels">
                            <input
                                className="radio-button"
                                type="radio" 
                                defaultChecked 
                                value="false" 
                                name="country" 
                                onChange={this.handleUpdate('country')} 
                            />
                            <span></span>
                            United States
                        </label>
                        <label className="radio-button-labels">
                            <input 
                                className="radio-button"
                                type="radio" 
                                value="false" 
                                name="country" 
                                onChange={this.handleUpdate('country')} 
                            />
                            <span></span>
                            Canada
                        </label>
                    </div>
                    <br />
                    <input 
                        type="submit" 
                        className="signup-button" 
                        value={this.props.formType} 
                    />
                    <span className="session-form-separator"></span>
                </form>
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
                {form}
                {this.props.otherForm}
            </div>
        );
    }
};

export default SessionForm;