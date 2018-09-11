import React from 'react';
import axios from 'axios';
import './Form.css'

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            url: '',
            productName: '',
            price: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }


    handleSubmit(e) {
        e.preventDefault();
        // debugger
        let { productName, price, url } = this.state;
        if (productName) {
            let product = {
                productName,
                url,
                price
            }
            axios.post('/api/products', product)
            .then(res => {
                // debugger
                    this.props.addProduct(res.data);
                    this.cancel();
                })
                .catch(err => console.log('axios create error', err))
        } else {
            console.log('Product name missing');
        }
    }

   

    cancel() {
        this.setState({
            url: '',
            productName: '',
            price: 0
        })
    }




    render() {
        console.log(this.props);
        return (
            <form className="form">
                <input type="url" value={this.state.url} name="url" onChange={this.handleChange} placeholder="Image URL" /> <br />
                <input type="text" value={this.state.productName} name="productName" onChange={this.handleChange} placeholder="Product Name" /> <br />
                <input type="number" value={this.state.price} name="price" onChange={this.handleChange} placeholder="Price" /> <br />
                <button onClick={_ => this.cancel()} >Cancel</button>
                <button type="submit" onClick={this.handleSubmit}>Add</button>
            </form>
        )
    }
}

export default Form

