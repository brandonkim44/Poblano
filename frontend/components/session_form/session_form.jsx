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
        const user = Object.assign({}, this.state);
        this.props.submitForm(user).then(this.closeModal);
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        const form = this.formType === 'SIGN IN' ? (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                <br />
                <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                <br />
                <input type="submit" value={this.formType}/>
            </form>
        ) : (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.firstName} onChange={this.handleInput('firstName')}/>
                <br />
                <input type="text" value={this.state.lastName} onChange={this.handleInput('lastName')}/>
                <br />
                <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                <br />
                <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                <br />
                <input type="text" value={this.state.phoneNumber} onChange={this.handleInput('phoneNumber')}/>
                <br />
                <label>
                    <input type="radio" checked value="United States" name="country"/>
                    United States
                </label>
                <label>
                    <input type="radio" value="Canada" name="country"/>
                    Canada
                </label>
                <br />
                <input type="submit" value={this.formType}/>
            </form>
        );
        
        return (
            <div>
                <h1>{this.formType}</h1>
                {form}
            </div>
        );
    }
};

export default SessionForm;