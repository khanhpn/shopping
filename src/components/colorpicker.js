import React, { Component } from 'react'

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["green", "blue", "yellow", "purple"]
    };
  }

  showColor(color) {
    return {
      backgroundColor: color,
      padding: "40px",
      margin: "20px",
      marginBottom: "-40px"
    };
  }

  render() {
    var elementColors = this.state.colors.map((color, index) => {
      return <span key={index} style={this.showColor(color)}></span>
    });
    return (
      <div className="col-sm-6">
        <div className="panel panel-primary">
          <div className="panel-heading">Color picker</div>
        </div>
        <div className="panel-body">
          {elementColors}
          <hr/>
        </div>
      </div>
    )
  }
}
