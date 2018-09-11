import React from 'react';
import './Product.css';

export default function Product(props) {


    // constructor(props) {
    //     super(props);
    //     this.deleteProduct = this.deleteProduct.bind(this);
    // }

    // deleteProduct(id) {
    //     axios.delete(`/api/product/${id}`)
    //         .then(res => this.props.getAllProducts())
    //         .catch(err => console.log('delete product error', err))
    // }

    return (
        <div className="productcard">
            <h1>
                {props.productName}
            </h1>
            <img
                src={props.url}
                alt='product'
            />
            <p>
                ${props.price}
            </p>
            <button onClick = {()=> props.deleteProduct(props.id)}>x</button>
        </div>
    )
}