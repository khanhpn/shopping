import React, { Component } from 'react'

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: true
    };
    this.onHanldeChange = this.onHanldeChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onCloseForm = () => {
    this.props.onCloseForm();
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
    this.props.onAddJob(this.state);
    this.onHandleClear(event);
    this.onCloseForm();
  }

  render() {
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Thêm Công Việc<span className="fa fa-times-circle" aria-hidden="true" onClick={this.onCloseForm}></span></h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                      <label>Tên :</label>
                      <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onHanldeChange} />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onHanldeChange}>
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
