import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
  }
  onClickButton() {
    console.log(this.props.price);
  }

  onClickButton2(text) {
    console.log(text);
  }

  onClickButton1 = () => {
    console.log(this.props.price);
  }
  showButtonCart(status) {
    if(status == "true") {
      return(
        <div className="card-block">
        </div>
      );
    }
  }
  
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src="https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/content-link-iphone-transfer-content-ios11_2x.png" alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">
          With iOS 11, moving information to a new iPhone just got easier.
          {this.props.children}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{this.props.price} vnd</li>
        </ul>
        <a className="btn btn-success"  onClick={this.onClickButton1}>Mua hàng</a>
        <a className="btn btn-success"  onClick={() => {this.onClickButton2('Abc')}}>Mua hàng1</a>
        {this.showButtonCart(this.props.status)}
      </div>
    )
  }
}
