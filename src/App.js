import React, { Component } from 'react';
import './App.css';
import Reset from './components/reset';
import Result from './components/result';
import ColorPicker from './components/colorpicker';
import SizeSetting from './components/sizeseting';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <ColorPicker />
          <SizeSetting />
          <Reset />
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
