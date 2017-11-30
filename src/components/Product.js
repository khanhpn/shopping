import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src="https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/content-link-iphone-transfer-content-ios11_2x.png" alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title">Iphone</h4>
          <p className="card-text">
          With iOS 11, moving information to a new iPhone just got easier.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">8.000.000 vnd</li>
        </ul>
        <div className="card-block">
          <a href="#" className="btn btn-success">Mua hàng</a>
        </div>
      </div>
    )
  }
}
