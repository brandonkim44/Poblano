import React from 'react';

class NutritionItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entree: ""
        }
    }

    // handleClickOnEntree(entree) {
    //     this.setState({ entree });
    // }

    // renderEntree() {
    //     return (
            
    //     )
    // }


    landingPage() {
        return (
            <div className="gallery">
                <figure className="gallery-item gallery-item-1">
                    <img src={window.burrito} class="gallery-img" alt="burrito" onClick={() => renderEntree('burrito')}></img>
                    <figcaption>BURRITO</figcaption>
                </figure>
                <figure className="gallery-item gallery-item-2">
                    <img src={window.bowl} class="gallery-img" alt="bowl"></img>
                    <figcaption>BURRITOS&nbsp;BOWL</figcaption>
                </figure>
                <figure className="gallery-item gallery-item-3">
                    <img src={window.tacos} class="gallery-img" alt="tacos"></img>
                    <figcaption>TACOS</figcaption>
                </figure>
                <figure className="gallery-item gallery-item-4">
                    <img src={window.salad} class="gallery-img" alt="salad"></img>
                    <figcaption>SALAD</figcaption>
                </figure>
                <figure className="gallery-item gallery-item-5">
                    <img src={window.quesadilla} class="gallery-img" alt="quesadilla"></img>
                    <figcaption>QUESADILLA</figcaption>
                </figure>
                <figure className="gallery-item gallery-item-6">
                    <img src={window.kidsmeal} class="gallery-img" alt="kidsmeal"></img>
                    <figcaption>KID'S&nbsp;MEAL</figcaption>
                </figure>
                <figure className="gallery-item gallery-item-7">
                    <img src={window.sidesdrinks} class="gallery-img" alt="sides-and-drinks"></img>
                    <figcaption>SIDES&nbsp; &amp; &nbsp;DRINKS</figcaption>
                </figure>
                <figure className="gallery-item gallery-item-8">
                    <img src={window.lifestyle} class="gallery-img" alt="lifestyle-bowls"></img>
                    <figcaption>LIFESTYLE&nbsp;BOWLS</figcaption>
                </figure>
            </div>
        )
    }

    calculatorPage() {

        // const buildEntree =() => {
        //     switch (this.state.entree) {
        //     case "Burrito":
        //         return (
        //             <div>

        //             </div>
        //         )
        //     case "Bowl":

        //         break;
        
        //     default:
        //         break;
        //     }
        // }
        // return (
        //     <div>
        //         <div>
        //             <h2>{this.state.entree}</h2>
        //             <span>|</span>
        //             <span>START OVER</span>
        //             {/* {buildEntree()} */}
        //         </div>
        //     </div>
        // );
    }

    render() {

        // const renderedComponent = () => {
        //     if (this.state.entree === "") {
        //         return this.landingPage();
        //     } else {
        //         return this.calculatorPage();
        //     }
        // }
        return (
            <div>
                {this.landingPage()}
            </div>
        );
    }
};

export default NutritionItems;