import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product />  
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Product />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
