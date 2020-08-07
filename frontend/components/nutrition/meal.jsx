import React from 'react';
import IndexContainer from './index_container';
import ShowContainer from './show_container';

class Meal extends React.Component {
    constructor(props) {
        super(props);
        this.updateComponent = this.updateComponent.bind(this);
        this.state = { page: this.props.page };
        debugger;
    }

    mealsPage() {
        debugger;
        return <IndexContainer update={() => this.updateComponent("show")}/>
    }

    ingredientsPage() {
        // debugger;
        return <ShowContainer update={() => this.updateComponent("index")}/>
    }

    updateComponent(display) {
        this.setState( { page: display } );
    }

    render() {
        debugger;
        const renderedComponent = (this.state.page === "index")  ? (
                this.mealsPage()
            ) : (
                this.ingredientsPage()
                );
        
        return (
            <div>
                {renderedComponent}
            </div>
        );
    }
};

export default Meal;

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