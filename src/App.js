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
    this.addProduct=this.addProduct.bind(this);
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
        <Form addProdcut = {this.addProduct}/>
        <Dashboard products={this.state.products} />
        </header>

      </div>
    );
  }
}

export default App;
