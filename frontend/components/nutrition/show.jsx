import React from 'react';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    startOver() {
        this.setState({ indexPage: true })
    
    }


    render() {

        
        const ingredients = this.props.ingredients.map(ingredient => {
                return (
                    <li>
                        <img src={ingredient.photoUrl} alt="" />
                        <figure>{ingredient.ingredient_name}</figure>
                    </li>
                )
            })

        return (
            <div>
                {ingredients}
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