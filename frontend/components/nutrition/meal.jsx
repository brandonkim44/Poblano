import React from 'react';
import IndexContainer from './index_container';
import ShowContainer from './show_container';

class Meal extends React.Component {
    constructor(props) {
        super(props);
        this.updateComponent = this.updateComponent.bind(this);
    }

    mealsPage() {
        debugger;
        return <IndexContainer />
    }

    ingredientsPage() {
        // debugger;
        return <ShowContainer update={this.updateComponent}/>
    }

    updateComponent() {
        this.setState( { indexPage: false } );
    }

    render() {

        const renderedComponent = this.props.indexPage ? (
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