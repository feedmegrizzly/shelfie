import React from 'react';
import Product from '../Product/Product';



class Dashboard extends React.Component {
    render() {
        console.log(this.props)
        const products = this.props.products.map((product) => {
            return <Product key = {product.id} id = {product.id} url = {product.url} price = {product.price} productName = {product.productname} deleteProduct = {this.props.deleteProduct} />
        })
        return (
            <div>
                {products}

            </div>
        )
    }
}

export default Dashboard