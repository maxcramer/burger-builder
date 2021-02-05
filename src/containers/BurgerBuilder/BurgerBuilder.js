import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component{
    // constructor(props) {
    //     super();
    // }
    state = {
        ordering: false,

    }

    componentDidMount () {
        console.log(this.props)
        this.props.onInitIngredients()
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0 );
            return sum > 0;
    }


    orderHandler = () => {
        this.setState({ordering: true})
    }

    orderCancelHandler = () => {
        this.setState({ordering: false})
    }

    orderContinueHandler = () => {
        // alert('You continue!'
        this.props.history.push('/checkout');
    }

    render() {
        const disableInfo = {
            ...this.props.ings
        };
        for( let key in disableInfo ) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if(this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
            <BuildControls 
                disabled={disableInfo}
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemoved={this.props.onIngredientRemoved}
                price={this.props.price}
                purchasable={this.updatePurchaseState(this.props.ings)}
                ordered={this.orderHandler}
            />
    
                </Aux>
            );
            orderSummary =  <OrderSummary 
            ingredients={this.props.ings}
            orderCancelled={this.orderCancelHandler}
            orderContinue={this.orderContinueHandler}
            price={this.props.price}
        />
        }
        

        return (
            <Aux>
                <Modal show={this.state.ordering} modalClosed={this.orderCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }


};

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
        error: state.error      
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));

