import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Form from './components/Form';
import Search from './components/search';
import Clock from './components/clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "iphone",
          status: true,
          price: 1000000,
          description: "this is special iphone"
        },
        {
          id: 2,
          name: "samsung",
          status: true,
          price: 1000000,
          description: "this is special iphone"
        },
        {
          id: 3,
          name: "lg",
          status: true,
          price: 1000000,
          description: "this is special iphone"
        },
        {
          id: 4,
          name: "asus",
          status: true,
          price: 1000000,
          description: "this is special iphone"
        }
      ],
      isActive: true
    };
  }
  render() {
    let elements = this.state.products.map((product, index) => {
      return(
        <Product id={product.id} name={product.name} price={product.price} status={product.status} key={index}>
        {product.description}
        </Product>
      );
    });
    return (
      <div className="container-fluid">
        <Clock />
        <Search />
        <Header />
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            {elements}
          </div>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
