import React, { Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }, 
        loading: false
    }

    orderHandler = (event) => {
        console.log(this.props);
        event.preventDefault();
        this.setState({ loading: true });

            const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Gurcan Hamali",
                address: {
                street: "Collins",
                zipCode: "3008",
                country: "Australia",
                },
                email: "gurcanhamali@gurcan.com",
            },
            deliveryMethod: "fast",
            };
            axios
            .post("/orders.json", order)
            .then((response) => {
                this.setState({ loading: false});
                this.props.history.push('/');
            })
            .catch((error) => {
                this.setState({ loading: false });
            });        
    }
    render() {
        let form = (            
        <form>
            <Input inputtype="input" type="text" name="name" placeholder="Enter Your Name" />
            <Input inputtype="input" type="email" name="email" placeholder="Enter Your Email" />
            <Input inputtype="input" type="text" name="street" placeholder="Enter Your Street" />
            <Input inputtype="input" type="text" name="postal" placeholder="Enter Your Postal Code" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if (this.state.loading){
            form =<Spinner />;
        }
        return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
        );
    }
}

export default ContactData;