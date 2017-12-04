import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  render() {
    var products = [
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
    ];

    let elements = products.map((product, index) => {
      return(
        <Product id={product.id} name={product.name} price={product.price} status={product.status}>
        {product.description}
        </Product>
      );
    });
    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            {elements}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
