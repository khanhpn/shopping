import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
      super(props);
      this.addOnAddProduct = this.addOnAddProduct.bind(this);
  }
  addOnAddProduct() {
      console.log(this.refs.name.value);
      console.log("fuck");
  }
  render() {
    return (
      <div>
            <legend>Form title</legend>
            <div className="form-group">
                <label>label</label>
                <input type="text" className="form-control" id="" placeholder="Input field" ref="name" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.addOnAddProduct}>Submit</button>
      </div>
    )
  }
}
