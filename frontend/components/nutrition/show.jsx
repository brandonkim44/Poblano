import React from 'react';
import NutritionChart from './pie_chart';

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
        debugger;
        this.state = { data: this.props.data };
        debugger;
    }

    // updateState(props) {
        
    // }

    startOver() {
        this.props.update();
    }

    updateState() {
        debugger;
        // return null;
        return e => {
            debugger;
            // if (state.ingredient)
            const totalFats = parseInt(e.target.dataset.fats) + parseInt(this.state.data[0].value);
            const protein = parseInt(e.target.dataset.protein) + parseInt(this.state.data[1].value);
            const carbs = parseInt(e.target.dataset.carbs) + parseInt(this.state.data[2].value);
            // const calories = e.target.dataset.calories;


            const data = [
                { name: 'Total Fat', value: totalFats },
                { name: 'Protein', value: protein },
                { name: 'Carbohydrates', value: carbs },
            ];
            debugger;
            this.setState({ data: data });
            debugger;
        }
    }

    fillings() {

        if (this.props.fillings.length > 0) {
            const section = this.props.fillings.map(ingredient => {
                return (
                    <li key={ingredient.id}>
                        <figure
                            className={ingredient.ingredientName}
                            data-fats={ingredient.fats}
                            data-protein={ingredient.protein}
                            data-calories={ingredient.calories}
                            data-carbs={ingredient.carbs}
                            onClick={this.updateState()}
                        >{ingredient.ingredientName}</figure>
                    </li>
                )
            })
            return (
                <div>
                    <span>FILLINGS</span>
                    <ul className="fillings">
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
                    <li
                        className={ingredient.ingredientName}
                        key={ingredient.id}
                        data-fats={ingredient.fats}
                        data-protein={ingredient.protein}
                        data-calories={ingredient.calories}
                        data-carbs={ingredient.carbs}
                    >
                        <figure>{ingredient.ingredientName}</figure>
                    </li>
                )
            })
            return (
                <div>
                    <span>INCLUDED&nbsp;INGREDIENTS</span>
                    <ul>
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
                        <li
                            className={ingredient.ingredientName}
                            key={ingredient.id}
                            data-fats={ingredient.fats}
                            data-protein={ingredient.protein}
                            data-calories={ingredient.calories}
                            data-carbs={ingredient.carbs}
                        >
                            <figure>{ingredient.ingredientName}</figure>
                        </li>
                    )
                })
                return (
                    <div>
                        <span>RICE&nbsp; &amp; &nbsp;BEANS</span>
                        <ul>
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
                    <li
                        className={ingredient.ingredientName}
                        key={ingredient.id}
                        data-fats={ingredient.fats}
                        data-protein={ingredient.protein}
                        data-calories={ingredient.calories}
                        data-carbs={ingredient.carbs}
                    >
                        <figure>{ingredient.ingredientName}</figure>
                    </li>
                )
            })
            return (
                <div>
                    <span>TOP&nbsp;IT&nbsp;OFF</span>
                    <ul>
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
                    <li
                        className={ingredient.ingredientName}
                        key={ingredient.id}
                        data-fats={ingredient.fats}
                        data-protein={ingredient.protein}
                        data-calories={ingredient.calories}
                        data-carbs={ingredient.carbs}
                    >
                        <figure>{ingredient.ingredientName}</figure>
                    </li>
                )
            })
            return (
                <div>
                    <ul>
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
                    <li
                        className={ingredient.ingredientName}
                        key={ingredient.id}
                        data-fats={ingredient.fats}
                        data-protein={ingredient.protein}
                        data-calories={ingredient.calories}
                        data-carbs={ingredient.carbs}
                    >
                        <figure>{ingredient.ingredientName}</figure>
                    </li>
                )
            })
            return (
                <div>
                    <span>SIDES</span>
                    <ul>
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
                    <li
                        className={ingredient.ingredientName}
                        key={ingredient.id}
                        data-fats={ingredient.fats}
                        data-protein={ingredient.protein}
                        data-calories={ingredient.calories}
                        data-carbs={ingredient.carbs}
                    >
                        <figure>{ingredient.ingredientName}</figure>
                    </li>
                )
            })
            return (
                <div>
                    <span>DRINKS</span>
                    <ul>
                        {section}
                    </ul>
                </div>
            )
        }
    }

    legend() {
        return (
            <div>
                
            </div>
        )
    }

    render() {
        debugger;

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
            <div>
                <br/>
                <ul>
                    {this.props.mealName}
                    <span 
                        className={"start-over"}
                        onClick={() => this.startOver()}>
                    START OVER
                    </span>
                    {component()}
                    <NutritionChart data={this.state.data}/>
                    <div>

                    </div>
                </ul>
            </div>
        )
    }
}

export default Show;