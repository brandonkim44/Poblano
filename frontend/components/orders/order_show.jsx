import React from 'react';
import { OrderIngredientItem } from './order_ingredient_item';

class OrderShow extends React.Component {
    constructor(props) {
        super(props);
        this.startOver = this.startOver.bind(this);
        this.fillings = this.fillings.bind(this);
        this.toppings = this.toppings.bind(this);
        this.riceAndBeans = this.riceAndBeans.bind(this);
        this.lifestyleBowls = this.lifestyleBowls.bind(this);
        this.sides = this.sides.bind(this);
        this.drinks = this.drinks.bind(this);
    }

    startOver() {
        this.props.update();
    }

    fillings() {

        if (this.props.fillings.length > 0) {
            const section = this.props.fillings.map(ingredient => {
                return (
                    <OrderIngredientItem key={ingredient.id} ingredient={ingredient}/>
                )
            })
            return (
                <div className="section" >
                    <span className="section-name">FILLINGS</span>
                    <ul className="section-container">
                        {section}
                    </ul>
                </div>
            )
        }
    }

    riceAndBeans() {
        if (this.props.riceAndBeans.length > 0) {
            const section = this.props.riceAndBeans.map(ingredient => {
                return (
                    <OrderIngredientItem key={ingredient.id} ingredient={ingredient}/>
                )
            })
            return (
                <div className="section" >
                    <span className="section-name">RICE&nbsp;AND&nbsp;BEANS</span>
                    <ul className="section-container">
                        {section}
                    </ul>
                </div>
            )
        }
    }

    toppings() {
        if (this.props.toppings.length > 0) {
            const section = this.props.toppings.map(ingredient => {
                return (
                    <OrderIngredientItem key={ingredient.id} ingredient={ingredient}/>
                )
            })
            return (
                <div className="section" >
                    <span className="section-name">TOP&nbsp;IT&nbsp;OFF</span>
                    <ul className="section-container">
                        {section}
                    </ul>
                </div>
            )
        }
    }

    lifestyleBowls() {
        if (this.props.lifestyleBowls.length > 0) {
            const section = this.props.lifestyleBowls.map(ingredient => {
                return (
                    <OrderIngredientItem key={ingredient.id} ingredient={ingredient}/>
                )
            })
            return (
                <div className="section" >
                    <ul className="section-container">
                        {section}
                    </ul>
                </div>
            )
        }
    }

    sides() {
        if (this.props.sides.length > 0) {
            const section = this.props.sides.map(ingredient => {
                return (
                    <OrderIngredientItem key={ingredient.id} ingredient={ingredient}/>
                )
            })
            return (
                <div className="section" >
                    <span className="section-name">SIDES</span>
                    <ul className="section-container">
                        {section}
                    </ul>
                </div>
            )
        }
    }

    drinks() {
        if (this.props.drinks.length > 0) {
            const section = this.props.drinks.map(ingredient => {
                return (
                    <OrderIngredientItem key={ingredient.id} ingredient={ingredient}/>
                )
            })
            return (
                <div className="section" >
                    <span className="section-name">DRINKS</span>
                    <ul className="section-container">
                        {section}
                    </ul>
                </div>
            )
        }
    }

    render() {


        const component = () => {

            if (this.props.ingredients.length > 0) {
                return (
                    <div>
                        {this.fillings()}
                        {this.riceAndBeans()}
                        {this.toppings()}
                        {this.sides()}
                        {this.drinks()}
                        {this.lifestyleBowls()}
                    </div>
                );
            } else {
                return null;
            }
        }
        return (
            <div className="show-page-container">
                <br />
                <ul>
                    <div className="show-page-header">
                        <img src={this.props.mealPhoto} alt={`${this.props.mealName}-pic`}/>
                        <h1>BUILD YOUR</h1>
                        <span className="meal-name-show-page">{this.props.mealName}</span>
                        <span className="meal-description">{this.props.mealDescription}</span>
                        <span className="main-or">|</span>
                        <span
                            className="start-over"
                            onClick={() => this.startOver()}>
                            START OVER
                        </span>
                    </div>
                    <div className="ingredients-container">
                        {component()}
                    </div>
                </ul>
            </div>
        )
    }
}

export default OrderShow;