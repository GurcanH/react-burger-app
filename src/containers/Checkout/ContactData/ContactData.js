import React, { Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
        <diV className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Enter Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Enter Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Enter Your Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Enter Your Postal Code" />
                <Button btnType="Success">ORDER</Button>
            </form>
        </diV>
        );
    }
}

export default ContactData;