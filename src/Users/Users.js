import React, { Component } from 'react'

export default class Users extends Component {

    removeMethod(id){
        this.props.onRemove(id)
    }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <button onClick={this.removeMethod.bind(this, this.props.id)}>remove</button>
      </div>
    )
  }
}
