import React, { Component } from 'react'

export default class Product extends Component {
  showInfoProduct(product) {
    if(product.display) {
      return(
        <div className="card-block">
          <a href="#" className="btn btn-success">Mua hàng</a>
        </div>
      );
    }
  }
  render() {
    var a = 5;
    var product = {
      id: 1,
      name: "galaxy",
      price: 1000000,
      display: true
    };

    var users = [
      {
        id: 1,
        name: "khanh",
        age: 27
      },
      {
        id: 2,
        name: "ngoc",
        age: 19
      },
      {
        id: 3,
        name: "pham",
        age: 18
      }
    ];
    var elements = users.map((user, index) => {
      return (
        <div key={user.id}>
          <p>name: {user.name}</p>
          <hr />
          <p>age: {user.age}</p>
        </div>
      );
    });
    return (
      <div className="card">
        <img className="card-img-top" src="https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/content-link-iphone-transfer-content-ios11_2x.png" alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">
          With iOS 11, moving information to a new iPhone just got easier.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{product.price} vnd</li>
        </ul>
        {this.showInfoProduct(product)}
        <br />
        {elements}
      </div>
    )
  }
}
