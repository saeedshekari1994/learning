import React, { Component } from 'react'
import Counter from './Component/Counter'
import Temperature from './Temperature/Temperature'
export default class App extends Component {
  render() {
    return (
      <div>
        <Counter></Counter>
        <Temperature></Temperature>
      </div>
    )
  }
}
