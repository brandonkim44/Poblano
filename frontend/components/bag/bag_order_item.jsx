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

    renderMealDetails() {
        return (
            <>
                <div className="bag-order-entree-header">
                        <span>{this.props.mealType}</span>
                        <span>{this.props.mainMealPrice}</span>
                </div>
                <div className="bag-order-entree-details">
                        {this.props.details}
                </div>
            </>
        )
    }

    renderSides() {

        const sideEntries = Object.entries(this.props.sides);

        const showSides = sideEntries.map((side, idx) => {
            let sideName = side[0];
            let sidePrice = side[1];
            return (
                <div key={idx} className="bag-order-side-container">
                    <div className="bag-order-side-name">   
                        {sideName}
                    </div>
                    <div className="bag-order-side-price">
                        {sidePrice}
                    </div>
                </div>
            )
        });

        return showSides;
    }

    render() {
        return (
          <div className="bag-order">
            <div className="bag-name-orderprice-container">
              <div className="bag-order-meal-header">
                <input
                  className="mealname-box"
                  type="text"
                  name="orderText"
                  id="orderText"
                  onChange={this.handleInput}
                  maxLength="20"
                  value={this.state.orderName}
                />
                ;
                <span className="bag-orderTotalPrice">
                  {this.props.totalPrice}
                </span>
              </div>
              <div className="bag-order-entree-container">
                <div className="bag-order-entree-top">
                  {this.renderMealDetails()}
                </div>
                <div className="bag-order-entree-bottom">
                    {this.renderSides()}
                </div>
              </div>
            </div>
          </div>
        );
    }
};

export default BagOrderItem;