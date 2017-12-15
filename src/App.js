import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "sample username",
      txtPassword: "",
      txtContent: "",
      sltGender: 1,
      rdLanguage: 'ja',
      chkbStatus: true
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandelReset = this.onHandelReset.bind(this);
  }

  onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  onHandelReset(event) {
    event.preventDefault();
    this.setState({
      txtName: "",
      txtPassword: "",
      txtContent: "",
      sltGender: 1,
      rdLanguage: 'ja',
      chkbStatus: true
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                  <form onSubmit={this.onHandleSubmit}>
                      <div className="form-group">
                        <label>username:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="txtName"
                          value={this.state.txtName}
                          onChange={this.onHandleChange}/>
                      </div>
                      <div className="form-group">
                        <label>password:</label>
                        <input
                          type="password"
                          className="form-control"
                          name="txtPassword"
                          value={this.state.txtPassword}
                          onChange={this.onHandleChange}/>
                      </div>
                      <div className="form-group">
                        <label>Content:</label>
                        <textarea className="form-control" rows="3" name="txtContent" onChange={this.onHandleChange} value={this.state.txtContent}></textarea>
                      </div>
                      <label>Gender</label>
                      <select className="form-control" name="sltGender" value={this.state.sltGender} onChange={this.onHandleChange}>
                        <option value={0}>Female</option>
                        <option value={1}>Male</option>
                      </select>
                      <label>Language</label>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="rdLanguage"
                            id="input${1/(\w+)/\u\1/g}"
                            value="en"
                            onChange={this.onHandleChange}
                            checked={this.state.rdLanguage === 'en'} />
                          English
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="rdLanguage"
                            id="input${1/(\w+)/\u\1/g}"
                            value="ja"
                            onChange={this.onHandleChange}
                            checked={this.state.rdLanguage === 'ja'} />
                          Japanese
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" value={true} name="chkbStatus" onChange={this.onHandleChange} checked={this.state.chkbStatus === true} />
                          Status
                        </label>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        &nbsp;
                        <button type="reset" className="btn btn-success" onClick={this.onHandelReset}>Reset</button>
                      </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
