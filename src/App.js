import React, { Component } from 'react';
import './App.css';
import Reset from './components/reset';
import Result from './components/result';
import ColorPicker from './components/colorpicker';
import SizeSetting from './components/sizeseting';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
      fontSize: 15
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }
  onSetColor(params) {
    this.setState({
      color: params
    });
  }
  onChangeSize(value) {
    this.setState({
      fontSize: this.state.fontSize + value
    });
  }
  onSettingDefault(value) {
    if(value) {
      this.setState({
        color: "blue",
        fontSize: 15
      });
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
          <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize} />
          <Reset onSettingDefault={this.onSettingDefault}/>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
