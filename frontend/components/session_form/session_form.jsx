import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        const { formType, input, submitForm, closeModal } = this.props;
        this.state = input;
        this.formType = formType;
        this.submitForm = submitForm;
        this.closeModal = closeModal;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.submitForm(this.state).then(this.closeModal);
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {
        const form = this.formType === 'SIGN IN' ? (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="input" type="text" placeholder="Email" onChange={this.handleInput('email')}/>
                    <br />
                    <input className="input" type="password" placeholder="Password" onChange={this.handleInput('password')}/>
                    <br />
                    <input className="signin-button" type="submit" value={this.formType}/>
                </form>
            </div>
        ) : (
            <div>
                <h3 className="signup-message">Create an account so you can get rewards and order your favorites even faster.</h3>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <input className="input" type="text" placeholder="First Name" onChange={this.handleInput('firstName')}/>
                    <br />
                    <input className="input" type="text" placeholder="Last Name" onChange={this.handleInput('lastName')}/>
                    <br />
                    <input className="input" type="text" placeholder="Email" onChange={this.handleInput('email')}/>
                    <br />
                    <input className="input" type="password" placeholder="Password" onChange={this.handleInput('password')}/>
                    <br />
                    <input className="input" type="text" placeholder="Mobile Number" onChange={this.handleInput('phoneNumber')}/>
                    <br />
                    <label>
                        <input type="radio" checked value="United States" name="country"/>
                        United States
                    </label>
                    <label>
                        <input type="radio" value="Canada" name="country" onChange={this.handleInput('country')}/>
                        Canada
                    </label>
                    <br />
                    <input type="submit" className="signup-button" value={this.formType}/>
                </form>
            </div>
            );
        
        return (
            <div>
                <h1 className="heading">{this.formType}</h1>
                {form}
                {this.props.otherForm}
                {this.renderErrors()}
            </div>
        );
    }
};

export default SessionForm;