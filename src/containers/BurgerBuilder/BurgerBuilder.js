import React, { Component } from 'react';
import axios from '../../axios-orders';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component{
    // constructor(props) {
    //     super();
    // }
    state = {
        purchasable: false,
        ordering: false,
        loading: false,
        error: false
    }

    componentDidMount () {

    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0 );
            this.setState({purchasable: sum > 0});
    }


    orderHandler = () => {
        this.setState({ordering: true})
    }

    orderCancelHandler = () => {
        this.setState({ordering: false})
    }

    orderContinueHandler = () => {
        // alert('You continue!')
  
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);

        const queryStirng = queryParams.join('&')

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryStirng
        });
    }

    render() {
        const disableInfo = {
            ...this.props.ings
        };
        for( let key in disableInfo ) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        let orderSummary = null;
        if(this.props.ingredients) {
            orderSummary =  <OrderSummary 
            ingredients={this.state.ingredients}
            orderCancelled={this.orderCancelHandler}
            orderContinue={this.orderContinueHandler}
            price={this.props.price}
        />
        }
        
        if(this.state.loading) {
            orderSummary = <Spinner />;
        }
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if(this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
            <BuildControls 
                disabled={disableInfo}
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemoved={this.props.onIngredientRemoved}
                price={this.props.price}
                purchasable={this.state.purchasable}
                ordered={this.orderHandler}
            />
    
                </Aux>
            )
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
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));

