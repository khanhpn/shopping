import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/taskform';
import Control from './components/control';
import TaskList from './components/tasklist';

class App extends Component {
  constructor(props) {
    super(props);
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
                <button type="button" className="btn btn-primary">
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
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
