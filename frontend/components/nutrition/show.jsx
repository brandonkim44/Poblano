import React from 'react';
import NutritionChart from './pie_chart';
import { IngredientItem } from './ingredient_item';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.startOver = this.startOver.bind(this);
        this.updateState = this.updateState.bind(this);
        this.fillings = this.fillings.bind(this);
        this.includedIngredients = this.includedIngredients.bind(this);
        this.toppings = this.toppings.bind(this);
        this.riceAndBeans = this.riceAndBeans.bind(this);
        this.lifestyleBowls = this.lifestyleBowls.bind(this);
        this.sides = this.sides.bind(this);
        this.drinks = this.drinks.bind(this);
        this.renderLegend = this.renderLegend.bind(this);
        this.state = { data: this.props.data, calories: this.props.calories };
        this.listenForScroll();
    }

    startOver() {
        this.props.update();
    }

    updateState() {
        // return null;
        return e => {
            let ingredientName = e.target.alt;
            let totalFats;
            let protein;
            let carbs;
            let calories;
            if (this.state[ingredientName]) {
                totalFats = parseInt(this.state.data[0].value) - parseInt(e.target.dataset.fats);
                protein = parseInt(this.state.data[1].value) - parseInt(e.target.dataset.protein);
                carbs = parseInt(this.state.data[2].value) - parseInt(e.target.dataset.carbs);
                calories = parseInt(this.state.calories) - parseInt(e.target.dataset.calories);
                const data = [
                    { name: 'Total Fat', value: totalFats },
                    { name: 'Protein', value: protein },
                    { name: 'Carbohydrates', value: carbs },
                ];
            
                e.target.className = "ingredient-img"
                this.setState({ data: data, calories: calories, [ingredientName]: false});
            } else {
                totalFats = parseInt(e.target.dataset.fats) + parseInt(this.state.data[0].value);
                protein = parseInt(e.target.dataset.protein) + parseInt(this.state.data[1].value);
                carbs = parseInt(e.target.dataset.carbs) + parseInt(this.state.data[2].value);
                calories = parseInt(e.target.dataset.calories) + parseInt(this.state.calories);
                const data = [
                    { name: 'Total Fat', value: totalFats },
                    { name: 'Protein', value: protein },
                    { name: 'Carbohydrates', value: carbs },
                ];
                e.target.className = "ingredient-img-clicked"
                this.setState({ data: data, calories: calories, [ingredientName]: true });
            }
        }
    }



    fillings() {
        debugger;
        console.log(this.props);
        console.log(this.props.fillings);

        if (this.props.fillings.length > 0) {
            const section = this.props.fillings.map(ingredient => {
                debugger;
                return (
                    <IngredientItem key={ingredient.id} ingredient={ingredient} updateState={this.updateState}/>
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

    includedIngredients() {

        if (this.props.includedIngredients.length > 0) {
            const section = this.props.includedIngredients.map(ingredient => {
                return (
                    <IngredientItem key={ingredient.id} ingredient={ingredient} updateState={this.updateState} />
                )
            })
            return (
                <div className="section" >
                    <span className="section-name">INCLUDED&nbsp;INGREDIENTS</span>
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
                    <IngredientItem key={ingredient.id} ingredient={ingredient} updateState={this.updateState} />
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
                    <IngredientItem key={ingredient.id} ingredient={ingredient} updateState={this.updateState} />
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
                    <IngredientItem key={ingredient.id} ingredient={ingredient} updateState={this.updateState} />
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
                    <IngredientItem key={ingredient.id} ingredient={ingredient} updateState={this.updateState} />
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
                    <IngredientItem key={ingredient.id} ingredient={ingredient} updateState={this.updateState} />
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

    renderLegend() {
        return (
            <div className="legend">
                <div className="calories-container">
                    <span className="legend-titles calories">CALORIES</span>
                    <span className="legend-values">{this.state.calories}</span>
                </div>

                <div className="total-fat-container">
                    <span className="legend-titles fat">TOTAL&nbsp;FAT</span>
                    <span className="legend-values">{this.state.data[0].value}g</span>
                </div>

                <div className="protein-container">
                    <span className="legend-titles protein">PROTEIN</span>
                    <span className="legend-values">{this.state.data[1].value}g</span>
                </div>

                <div className="carbs-container">
                    <span className="legend-titles carbs">CARBOHYDRATES</span>
                    <span className="legend-values">{this.state.data[2].value}g</span>
                </div>
            </div>
        )
    }

    listenForScroll() {
        document.addEventListener('scroll', () => {
            const chart = document.querySelector('.chart-and-legend')
            const offset = chart.offsetTop;
            
            if (window.pageYOffset > offset && offset != 100) {
                const offsetLeft = chart.getBoundingClientRect().left;
                chart.classList.add('sticky');
                chart.style.left = offsetLeft + 'px';
            } else if (offset === 100 && window.pageYOffset < 309) {
                chart.classList.remove('sticky');
                chart.style.left = 'unset';
            }
        });
    }

    render() {
    

        const component = () => { 
            debugger;
            if (this.props.ingredients.length > 0) {
                return (
                        <div>
                            {this.includedIngredients()}
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
                <br/>
                <ul>
                    <div className="show-page-header">
                        <span className="meal-name-show-page">{this.props.mealName}</span>
                        <span className="main-or">|</span>
                        <span 
                            className="start-over"
                            onClick={() => this.startOver()}>
                        START OVER
                        </span>
                    </div>
                    <div className="ingredients-container">
                        {component()}
                        <div className="chart-and-legend">
                            <span className="legend-meal-name">YOUR&nbsp;{this.props.mealName}</span>
                            <NutritionChart 
                                className="pie-chart" 
                                data={ this.state.data ? this.state.data : this.props.data}
                                width={350}
                                height={490}
                                />
                            {this.renderLegend()}
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Show;