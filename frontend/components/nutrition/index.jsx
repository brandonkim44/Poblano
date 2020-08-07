import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.meals;
        this.handleClick = this.handleClick.bind(this);
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

    componentDidMount() {
        if (!this.props.meals["burrito"]) {
            this.props.fetchMeals()
        }
    }

    handleClick(mealId) {
        this.props.fetchIngredients(mealId);
        this.props.update();
    }

    underlineFigCaption() {
        return e => {
            e.currentTarget.children[1].className = "meal-name-hovered"
        }
    }

    returnFigCaption() {
        return e => {
            e.currentTarget.children[1].className = "meal-name"
        }
    }

    render() {

        // if (this.props.meals["burrito"]) {
            return(
                <div>
                    <h2 className="meals-page-title">SELECT A MEAL TO BEGIN</h2>
                    <div className="gallery">
                        <figure 
                            className="gallery-item gallery-item-1" 
                            onClick={() => this.handleClick(this.props.meals.burrito.id)}
                            onMouseOver={this.underlineFigCaption()}
                            onMouseLeave={this.returnFigCaption()}
                            >
                            <img src={window.burrito} className="gallery-img" alt="burrito"></img>
                            <figcaption className="meal-name">BURRITO</figcaption>
                        </figure>
                        <figure 
                            className="gallery-item gallery-item-2" 
                            onClick={() => this.handleClick(this.props.meals.bowl.id)}
                            onMouseOver={this.underlineFigCaption()}
                            onMouseLeave={this.returnFigCaption()}
                            >
                            <img src={window.bowl} className="gallery-img" alt="bowl"></img>
                            <figcaption className="meal-name">BURRITO&nbsp;BOWL</figcaption>
                        </figure>
                        <figure 
                            className="gallery-item gallery-item-3" 
                            onClick={() => this.handleClick(this.props.meals.tacos.id)}
                            onMouseOver={this.underlineFigCaption()}
                            onMouseLeave={this.returnFigCaption()}
                            >
                            <img src={window.tacos} className="gallery-img" alt="tacos"></img>
                            <figcaption className="meal-name">TACOS</figcaption>
                        </figure>
                        <figure 
                            className="gallery-item gallery-item-4" 
                            onClick={() => this.handleClick(this.props.meals.salad.id)}
                            onMouseOver={this.underlineFigCaption()}
                            onMouseLeave={this.returnFigCaption()}
                            >
                            <img src={window.salad} className="gallery-img" alt="salad"></img>
                            <figcaption className="meal-name">SALAD</figcaption>
                        </figure>
                        <figure 
                            className="gallery-item gallery-item-5" 
                            onClick={() => this.handleClick(this.props.meals.quesadilla.id)}
                            onMouseOver={this.underlineFigCaption()}
                            onMouseLeave={this.returnFigCaption()}
                            >
                            <img src={window.quesadilla} className="gallery-img" alt="quesadilla"></img>
                            <figcaption className="meal-name">QUESADILLA</figcaption>
                        </figure>
                        <figure 
                            className="gallery-item gallery-item-6" 
                            onClick={() => this.handleClick(this.props.meals.kids.id)}
                            onMouseOver={this.underlineFigCaption()}
                            onMouseLeave={this.returnFigCaption()}
                            >
                            <img src={window.kidsmeal} className="gallery-img" alt="kidsmeal"></img>
                            <figcaption className="meal-name">KID'S&nbsp;MEAL</figcaption>
                        </figure>
                        <figure 
                            className="gallery-item gallery-item-7" 
                            onClick={() => this.handleClick(this.props.meals.sides.id)}
                            onMouseOver={this.underlineFigCaption()}
                            onMouseLeave={this.returnFigCaption()}
                            >
                            <img src={window.sidesdrinks} className="gallery-img" alt="sides-and-drinks"></img>
                            <figcaption className="meal-name">SIDES&nbsp; &amp; &nbsp;DRINKS</figcaption>
                        </figure>
                        <figure 
                            className="gallery-item gallery-item-8" 
                            onClick={() => this.handleClick(this.props.meals.lifestyle.id)}
                            onMouseOver={this.underlineFigCaption()}
                            onMouseLeave={this.returnFigCaption()}
                            >
                            <img src={window.lifestyle} className="gallery-img" alt="lifestyle-bowls"></img>
                            <figcaption className="meal-name">LIFESTYLE&nbsp;BOWLS</figcaption>
                        </figure>
                    </div>
                </div>
            );
        // } else {
            // return null;
        // }
    }
};

export default Index;

{/* <div className="gallery">
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
</div> */}

{/* <div className="gallery">
    <figure className="gallery-item gallery-item-1">
        <img src={window.burrito} className="gallery-img" alt="burrito" onClick={() => this.fetchIngredients(this.props.meals["burrito"].id)}></img>
        <figcaption>BURRITO</figcaption>
    </figure>
    <figure className="gallery-item gallery-item-2">
        <img src={window.bowl} className="gallery-img" alt="bowl"></img>
        <figcaption>BURRITOS&nbsp;BOWL</figcaption>
    </figure>
    <figure className="gallery-item gallery-item-3">
        <img src={window.tacos} className="gallery-img" alt="tacos"></img>
        <figcaption>TACOS</figcaption>
    </figure>
    <figure className="gallery-item gallery-item-4">
        <img src={window.salad} className="gallery-img" alt="salad"></img>
        <figcaption>SALAD</figcaption>
    </figure>
    <figure className="gallery-item gallery-item-5">
        <img src={window.quesadilla} className="gallery-img" alt="quesadilla"></img>
        <figcaption>QUESADILLA</figcaption>
    </figure>
    <figure className="gallery-item gallery-item-6">
        <img src={window.kidsmeal} className="gallery-img" alt="kidsmeal"></img>
        <figcaption>KID'S&nbsp;MEAL</figcaption>
    </figure>
    <figure className="gallery-item gallery-item-7">
        <img src={window.sidesdrinks} className="gallery-img" alt="sides-and-drinks"></img>
        <figcaption>SIDES&nbsp; &amp; &nbsp;DRINKS</figcaption>
    </figure>
    <figure className="gallery-item gallery-item-8">
        <img src={window.lifestyle} className="gallery-img" alt="lifestyle-bowls"></img>
        <figcaption>LIFESTYLE&nbsp;BOWLS</figcaption>
    </figure>
</div> */}