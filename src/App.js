import React, { Component } from 'react';
import Header from './components/Header';
import Message from './components/Message';
import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';
import _ from 'lodash';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <Products />
            <Message />
            <Cart />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
