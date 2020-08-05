import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.fetchIngredients = this.fetchIngredients.bind(this);
    }

    // meals = {
    //     burrito: { id: 1, meal_name: burrito, photoUrl: 'sdsadsfsdfsd.com'}
    //     bowl: { id: 2, meal_name: bowl, photoUrl: 'ssddfdfsfs.com' }
    // }

    // mealsArray = [ burrito, bowl, tacos, salad, quesadilla, kids, sides, lifestyle]

    // meals["burrito"].id

    // mealsArray.map( (meal, idx) => {
    //     return (
    //         idx+1
    //         src={meals[meal].photoUrl}
    //         this.renderIngredients(meal.id)
    //     )
    // })

    componentWillMount() {
        this.props.fetchMeals()
    }

    fetchIngredients(mealId) {
        this.props.fetchIngredients(mealId);
    }

    render() {
        debugger;
        if (this.props.meals["burrito"]) {
            return(
                <div className="gallery">
                    <figure className="gallery-item gallery-item-1">
                        <img src={this.props.meals["burrito"].photoUrl} className="gallery-img" alt="burrito" onClick={() => this.fetchIngredients(this.props.meals["burrito"].id)}></img>
                        <figcaption>BURRITO</figcaption>
                    </figure>
                    <figure className="gallery-item gallery-item-2">
                        <img src={this.props.meals["bowl"].photoUrl} className="gallery-img" alt="bowl"></img>
                        <figcaption>BURRITOS&nbsp;BOWL</figcaption>
                    </figure>
                    <figure className="gallery-item gallery-item-3">
                        <img src={this.props.meals["tacos"].photoUrl} className="gallery-img" alt="tacos"></img>
                        <figcaption>TACOS</figcaption>
                    </figure>
                    <figure className="gallery-item gallery-item-4">
                        <img src={this.props.meals["salad"].photoUrl} className="gallery-img" alt="salad"></img>
                        <figcaption>SALAD</figcaption>
                    </figure>
                    <figure className="gallery-item gallery-item-5">
                        <img src={this.props.meals["quesadilla"].photoUrl} className="gallery-img" alt="quesadilla"></img>
                        <figcaption>QUESADILLA</figcaption>
                    </figure>
                    <figure className="gallery-item gallery-item-6">
                        <img src={this.props.meals["kids"].photoUrl} className="gallery-img" alt="kidsmeal"></img>
                        <figcaption>KID'S&nbsp;MEAL</figcaption>
                    </figure>
                    <figure className="gallery-item gallery-item-7">
                        <img src={this.props.meals["sides"].photoUrl} className="gallery-img" alt="sides-and-drinks"></img>
                        <figcaption>SIDES&nbsp; &amp; &nbsp;DRINKS</figcaption>
                    </figure>
                    <figure className="gallery-item gallery-item-8">
                        <img src={this.props.meals["lifestyle"].photoUrl} className="gallery-img" alt="lifestyle-bowls"></img>
                        <figcaption>LIFESTYLE&nbsp;BOWLS</figcaption>
                    </figure>
                </div>
            );
        } else {
            return null;
        }
    }
};

export default Index;