import React from 'react';
import { openModal } from '../../actions/modal_actions';

class BagPricing extends React.Component {

    constructor(props) {
        super(props)
        this.calculateTax = this.calculateTax.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        document.body.className = "modal-open";
        dispatch(openModal('signin'));
    }

    calculateTax() {
        return (this.props.bagTotal * 0.053).toFixed(2);
    }

    calculateTotal() {
        let tax = this.props.bagTotal * 0.053;
        let total = parseFloat(tax) + parseFloat(this.props.bagTotal);
        return (total).toFixed(2);
    }

    render() {
        return (
            <div className="bag-pricing-container">
                <div className="bag-total">
                    <span>Bag Total</span>
                    <span>${this.props.bagTotal}</span>
                </div>
                <div className="bag-signin">
                    <button onClick={() => this.handleClick()}>Sign In To Use Rewards</button>
                </div>
                <div className="bag-subtotal">
                    <span>Subtotal</span>
                    <span>${this.props.bagTotal}</span>
                </div>
                <div className="bag-tax">
                    <span>Tax</span>
                    <span>${this.calculateTax()}</span>
                </div>
                <hr className="bag-price-separator"/>
                <div className="bag-final-total">
                    <span>Total</span>
                    <span>${this.calculateTotal()}</span>
                </div>
            </div>
        )
    }
};

export default BagPricing;