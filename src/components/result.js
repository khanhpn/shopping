import React, { Component } from 'react'

export default class Result extends Component {
  setStyle() {
    return {
      color: this.props.color,
      fontSize: this.props.fontSize
    };
  }
  render() {
    return (
      <div className="col-sm-12">
        <div>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</div>
        <div id="content" style={this.setStyle()}>Content of setting</div>
      </div>
    )
  }
}
