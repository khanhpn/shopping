import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/taskform';
import Control from './components/control';
import TaskList from './components/tasklist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [] 
    };
    this.generateData = this.generateData.bind(this);
  }

  generateData(event) {
    var tasks = [
      {
        id: this.generateID(),
        name: "Learn Program",
        status: true
      },
      {
        id: this.generateID(),
        name: "Learn Ruby",
        status: true
      },
      {
        id: this.generateID(),
        name: "Learn React",
        status: true
      },
      {
        id: this.generateID(),
        name: "Learn Java",
        status: true
      }
    ];
    console.log(tasks);
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID() {
    return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <TaskForm />
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button type="button" className="btn btn-primary mr-5">
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                <button type="button" className="btn btn-primary" onClick={this.generateData}>
                  <span className="fa fa-plus mr-5"></span>Generate data
                </button>
                <Control />
                <div className="row mt-15">
                    <TaskList />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
