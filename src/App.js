import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import axios from 'axios'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
    this.addProduct = this.addProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }


  componentDidMount() {
    axios.get('/api/products')
      .then((res) => {
        this.setState({ products: res.data })
      })
      .catch(err => console.log('axios create error', err))
  }

  addProduct(products) {
    this.setState({
      products
    });
  }

  deleteProduct(id) {
    debugger
    axios.delete(`/api/products/${id}`)
      .then(res => {
        debugger
        this.setState({ products: res.data })
      })
      .catch(err => console.log('delete product error', err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Form addProduct={this.addProduct} />
          <Dashboard products={this.state.products} deleteProduct={this.deleteProduct} />
        </header>

      </div>
    );
  }
}

export default App;
