import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] ComponentDidUpdate')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
             <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}
                    </span>
                    : {this.props.ingredients[igKey]}
                </li>
            )   
        });
        return (
            <Aux>
                <h3>Order Summary</h3>
                <p>A delicious burger with:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: £{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout</p>
                <Button btnType="Success" clicked={this.props.orderContinue}>Continue</Button>
                <Button btnType="Danger" clicked={this.props.orderCancelled}>Cancel</Button>
            </Aux>
        )
    }
};

export default OrderSummary