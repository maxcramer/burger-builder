import React from 'react';

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}
                    </span>
                    : {props.ingredients[igKey]}
                </li>
        })


    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>A delicious burger with:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
            <Button btnType="Success" clicked={props.orderContinue}>Continue</Button>
            <Button btnType="Danger" clicked={props.orderCancelled}>Cancel</Button>
        </Aux>
    )
};

export default orderSummary