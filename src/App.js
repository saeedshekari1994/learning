import React, { Component } from 'react'
import Counter from './Component/Counter'
import Temperature from './Temperature/Temperature'
import Parameters from './Parameters/Parameters'
export default class App extends Component {
  render() {
    return (
      <div>
        <Counter></Counter>
        <Temperature></Temperature>
        <br/><br/><br/>
        <Parameters></Parameters>
      </div>
    )
  }
}
