import React from 'react';
import './Product.css'

export default function Product(props) {
    console.log(props)
    return (
        <div className="productcard">
                    <h1>
                        {props.productName}
                    </h1>
                    <img
                        src= {props.url}
                        alt= 'product'
                    />
                    <p>
                        {props.price}
                    </p>
                </div>
    )
}