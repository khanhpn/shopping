import React, { Component } from 'react'

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: ''
		};
	}

	onChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name]: value
		});
	}

	onSearch = () => {
		this.props.onSearch(this.state.keyword);
	}

	render() {
		var { keyword } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
					<input type="text"
						className="form-control"
						placeholder="Nhập từ khóa..."
						name="keyword"
						value={this.state.keyword}
						onChange={this.onChange} />
          <span className="input-group-btn">
						<button className="btn btn-primary" type="button" onClick={this.onSearch}>
              <span className="fa fa-search mr-5"></span>Tìm
            </button>
          </span>
        </div>
      </div>
    )
  }
}
