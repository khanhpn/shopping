import React, { Component } from 'react'

export default class TaskForm extends Component {
  render() {
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title"><span className="fa fa-trash mr-5" aria-hidden="true"></span>Thêm Công Việc</h3>
            </div>
            <div className="panel-body">
                <form>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" className="form-control" />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required">
                        <option value="1">Kích Hoạt</option>
                        <option value="0">Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning"><span className="fa fa-pencil mr-5"></span>Thêm</button>&nbsp;
                        <button type="submit" className="btn btn-danger"><span className="fa fa-trash mr-5"></span>Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
    )
  }
}
