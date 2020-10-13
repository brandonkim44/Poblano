import React from 'react';

class BagOrderItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = { orderName: this.props.orderName };
        this.handleInput = this.handleInput.bind(this);
        this.renderMealDetails = this.renderMealDetails.bind(this);
        this.renderSides = this.renderSides.bind(this);
    }

    handleInput() {
       return e => {
           this.setState({ orderName: e.currentTarget.value })
       }
    }

    handleBlurAndFocus() {
        return e => {
            let currentText = e.currentTarget.value;
            if (currentText.length === 0) {
                e.currentTarget.placeholder = "Who's this meal for?";
                e.currentTarget.className = "mealname-required-focused";
            } else {
                e.currentTarget.className = "bag-mealname-box";
            }
        }
    };

    renderMealDetails() {
        if (this.props.mainMealPrice > 0) {
            return (
                <>
                    <div className="bag-order-entree-header">
                            <span className="bag-meal-type-label">{this.props.mealType}</span>
                            <span className="bag-price">${this.props.mainMealPrice.toFixed(2)}</span>
                    </div>
                    <div className="bag-order-entree-details">
                            {this.props.details}
                    </div>
                </>
            )
        } else {
            return null;
        }
    }

    renderSides() {

        const sideEntries = Object.entries(this.props.sides);

        const showSides = sideEntries.map((side, idx) => {
            let sideName = side[0];
            let sidePrice = side[1].toFixed(2);
            return (
                <div key={idx} className="bag-order-side-container">
                    <div className="bag-order-side-name">   
                        {sideName}
                    </div>
                    <div className="bag-price">
                        ${sidePrice}
                    </div>
                </div>
            )
        });

        return showSides;
    }

    render() {
        debugger;
        return (
          <div className="bag-order">
            <div className="bag-name-orderprice-container">
              <div className="bag-order-meal-header">
                <input
                  className="bag-mealname-box"
                  type="text"
                  name="orderText"
                  id="orderText"
                  onChange={this.handleInput()}
                  onBlur={this.handleBlurAndFocus()}
                  onFocus={this.handleBlurAndFocus()}
                  maxLength="20"
                  value={this.state.orderName}
                />
                <span className="bag-price">
                  ${this.props.totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="bag-order-entree-container">
                <div className="bag-order-entree-top">
                  {this.renderMealDetails()}
                </div>
                <div className="bag-order-entree-bottom">
                    {this.renderSides()}
                </div>
                <div className="bag-order-options">
                    <span>Remove</span>
                    <span>Edit</span>
                    <span>Duplicate</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
};

export default BagOrderItem;