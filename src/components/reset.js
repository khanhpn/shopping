import React, { Component } from 'react'

export default class Reset extends Component {
  constructor(props) {
    super(props);
    this.onResetDefault = this.onResetDefault.bind(this);
  }
  onResetDefault() {
    this.props.onSettingDefault(true);
  }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.onResetDefault}>Reset</button>
      </div>
    )
  }
}
