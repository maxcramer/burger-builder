import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import axios from '../../axios-orders';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

const BurgerBuilder = props => {
    // constructor(props) {
    //     super();
    // }
    // state = {
    //     ordering: false,

    // }

    const [ordering, setOrdering] = useState(false);
    const { onInitIngredients } = props;

    useEffect(() => {
        onInitIngredients()
    }, [onInitIngredients])

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0 );
            return sum > 0;
    }


    const orderHandler = () => {
        if(props.isAuthenticated) {
            setOrdering(true);
        } else {
            props.onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        }
    }

    const orderCancelHandler = () => {
        setOrdering(false);
    }

    const orderContinueHandler = () => {
        props.onInitPurchase();
        // alert('You continue!'
        props.history.push('/checkout');
    }

        const disableInfo = {
            ...props.ings
        };
        for( let key in disableInfo ) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = props.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if(props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={props.ings}/>
            <BuildControls 
                disabled={disableInfo}
                ingredientAdded={props.onIngredientAdded}
                ingredientRemoved={props.onIngredientRemoved}
                price={props.price}
                purchasable={updatePurchaseState(props.ings)}
                ordered={orderHandler}
                isAuth={props.isAuthenticated}
            />
    
                </Aux>
            );
            orderSummary =  <OrderSummary 
            ingredients={props.ings}
            orderCancelled={orderCancelHandler}
            orderContinue={orderContinueHandler}
            price={props.price}
        />
        }
        

        return (
            <Aux>
                <Modal show={ordering} modalClosed={orderCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null      
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));

