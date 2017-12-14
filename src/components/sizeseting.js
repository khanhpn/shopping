import React, { Component } from 'react'

export default class SizeSetting extends Component {
  changeSize(value) {
    this.props.onChangeSize(value);
  }
  render() {
    return (
      <div className="col-sm-6">
        <div>Size: {this.props.fontSize}px</div>
        <div>
          <button type="button" className="btn btn-success" onClick={() => this.changeSize(-2)}>Down</button>
          <button type="button" className="btn btn-primary" onClick={() => this.changeSize(+2)}>Up</button>
        </div>
      </div>
    )
  }
}
