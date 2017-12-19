import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/taskform';
import Control from './components/control';
import TaskList from './components/tasklist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditing: null
    };
    this.generateData = this.generateData.bind(this);
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      console.log("component will mount");
      this.setState({
        tasks: tasks
      });
    }
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
        status: false
      },
      {
        id: this.generateID(),
        name: "Learn Java",
        status: true
      }
    ];

    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onToggleForm = (event) => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      });
    }
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID() {
    return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }

  onAddJob = (data) => {
    var { tasks } = this.state;
    if (data.id === '') {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }

    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        task: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    })
    return result;
  }

  onHandleDeleteTaskApp = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      })
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  onHandleEdit = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
      isDisplayForm: true
    });
  }

  render() {
    var {tasks, isDisplayForm, taskEditing} = this.state;
    var elmTaskForm = isDisplayForm ?
      <TaskForm onCloseForm={this.onCloseForm}
        onAddJob={this.onAddJob}
        task={taskEditing}/> : "";
    return (
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
            <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
              {elmTaskForm}
            </div>
            <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button type="button" className="btn btn-primary mr-5" onClick={this.onToggleForm}>
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
              </button>
              <button type="button" className="btn btn-primary" onClick={this.generateData}>
                <span className="fa fa-plus mr-5"></span>Generate data
              </button>
              <Control />
              <div className="row mt-15">
                <TaskList
                  tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onHandleDeleteTaskApp={this.onHandleDeleteTaskApp}
                  onHandleEdit={this.onHandleEdit} />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
