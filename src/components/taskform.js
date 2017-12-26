import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true
    };
    this.onHanldeChange = this.onHanldeChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onExitForm = () => {
    this.props.onCloseForm();
  }

  componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status
      });
    } else if (nextProps && nextProps.task === null) {
      this.setState({
        id: '',
        name: '',
        status: true
      });
    }
  }

  onHandleClear = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      status: false
    })
  }

  onHanldeChange(event) {
    var target = event.target
    var name = target.name;
    var value = target.value;
    if (name === 'status') value = value === "true" ? true : false;
    this.setState({
      [name]: value
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    this.props.onAddTask(this.state);
    this.onHandleClear(event);
    this.onCloseForm();
  }

  render() {
    var { id } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !== '' ? "Update job" : "New job"}
            <span className="fa fa-times-circle" aria-hidden="true" onClick={this.onExitForm}></span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onHandleSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onHanldeChange} />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onHanldeChange}>
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br/>
            <div className="text-center">
              <button type="submit" className="btn btn-warning"><span className="fa fa-pencil mr-5"></span>Thêm</button>&nbsp;
              <button type="submit" className="btn btn-danger" onClick={this.onHandleClear}><span className="fa fa-trash mr-5"></span>Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
