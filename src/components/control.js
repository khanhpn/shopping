import React, { Component } from 'react'
import Search from './search';
import Sort from './sort';

export default class Control extends Component {
  render() {
    return (
        <div className="row mt-15">
            <Search />
            <Sort />
        </div>
    )
  }
}
