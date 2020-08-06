import React from 'react';
import NutritionChart from './pie_chart';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.startOver = this.startOver.bind(this);
        this.updateState = this.updateState.bind(this);
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
            
            // if (state.ingredient)
            const totalFats = e.target.dataset.fats + this.state.data[0].value;
            const protein = e.target.dataset.protein + this.state.data[1].value;
            const carbs = e.target.dataset.carbs + this.state.data[2].value;
            // const calories = e.target.dataset.calories;
            // co


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


    render() {
        console.log(this.state);
        debugger;

        // const component = () => {
        //     debugger;
        //     // console.log(this.props);
        //     if (Object.keys(this.props.fillings).length > 0) {
        //         this.props.fillings.map(ingredient => {
        //             debugger;
        //             return this.updateState();
        //         })
        //     } else {
        //         return null;
        //     }
        // }
        
        // return component();
        // let that = this;
        const component = () => { 
            debugger;
            // console.log(this.props);
            if (this.props.ingredients.length > 0) {
                
                const fillings = () => { 
                    
                    if (this.props.fillings.length > 0) {
                        // console.log(this.props.fillings);
                        const section = this.props.fillings.map(ingredient => {
                            // console.log(this);
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
                const riceAndBeans = () => { 
                    
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
                const toppings = () => { 
                    
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
                const includedIngredients = () => {
                    
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
                const lifestyleBowls = () => {
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
                const sides = () => {
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
                const drinks = () => {
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


                return (
                        <div>
                            {includedIngredients()}
                            {fillings()}
                            {riceAndBeans()}
                            {toppings()}
                            {sides()}
                            {drinks()}
                            {lifestyleBowls()}
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
                </ul>
            </div>
        )
    }
}

export default Show;

// if (!this.props.indexPage) {
//     const mealName = Object.keys(this.props.meal)[0];
//     return (
//         <img src={this.props.ingredients.photoUrl} alt="burrito" />
//     )
// }