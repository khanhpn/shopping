import React, { Component } from 'react'

export default class SizeSetting extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <div>Size: 15px</div>
        <div>
          <a href="" className="btn btn-success">Down</a>
          <a href="" className="btn btn-primary">Up</a>
        </div>
      </div>
    )
  }
}
