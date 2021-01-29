import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

import './ContactData.css';

class ContactData extends Component{
    state = {
        name: ' ',
        email: ' ',
        address: {
            street: ' ',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Cramer',
                address: {
                    street: 'TestStreet 1',
                    zipCode: 'ASJ@£AS',
                    country: 'UK'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'Fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/')
            })
            .catch(err => {
                this.setState({loading: false})
            })

    }

    render() {
        let form = (
            <form>
            <Input inputType="input" type="text" name="name" placeholder="Your Name" />
            <Input inputType="input" type="email" name="email" placeholder="Your Email" />
            <Input inputType="input" type="text" name="street" placeholder="Your Street" />
            <Input inputType="input" type="text" name="postal" placeholder="Your Postcode" />
            <Button clicked={this.orderHandler} btnType="Success">Place Order</Button>
            </form>
        );
        if(this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>Please enter contact details</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;