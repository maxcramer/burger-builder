import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';

import './ContactData.css';

class ContactData extends Component{
    state = {
        name: ' ',
        email: ' ',
        address: {
            street: ' ',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
    }

    render() {
        return (
            <div className="ContactData">
                <h4>Please enter contact details</h4>
                <form>
                <input className="Input" type="text" name="name" placeholder="Your Name" />
                <input className="Input" type="email" name="email" placeholder="Your Email" />
                <input className="Input" type="text" name="street" placeholder="Your Street" />
                <input className="Input" type="text" name="postal" placeholder="Your Postcode" />
                <Button clicked={this.orderHandler} btnType="Success">Place Order</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;