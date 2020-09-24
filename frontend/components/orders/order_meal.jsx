import React from 'react';
import OrderIndexContainer from './order_index_container';
import OrderShowContainer from './order_show_container';

class OrderMeal extends React.Component {
    constructor(props) {
        super(props);
        this.updateComponent = this.updateComponent.bind(this);
        this.state = { page: this.props.page };
    }

    mealsPage() {
        return <OrderIndexContainer update={() => this.updateComponent("show")} />
    }

    ingredientsPage() {
        return <OrderShowContainer update={() => this.updateComponent("index")} />
    }

    updateComponent(display) {
        this.setState({ page: display });
    }

    render() {
        const renderedComponent = (this.state.page === "index") ? (
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

export default OrderMeal;