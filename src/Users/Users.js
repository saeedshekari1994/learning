import React, { Component } from 'react'

export default class Users extends Component {
  render() {
    return (
      <div>
        <h2>UserName is : {this.props.name} and their age is : {this.props.age}</h2>
      </div>
    )
  }
}
