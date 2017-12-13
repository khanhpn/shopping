import React, { Component } from 'react'

export default class Result extends Component {
  render() {
    return (
      <div className="col-sm-12">
        <div>Color: red - Fontsize: 12px</div>
        <div><input type="text" className="form-control" placeholder="content here"/></div>
      </div>
    )
  }
}
