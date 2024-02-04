import React, { Component } from 'react'
import './Counter.css'
export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    clickToAddHandler(){
        // console.log('add');
        this.setState(prevState => {
            return {count:prevState.count + 1}
        })
    }
    clickToDecreaseHandler(){
        // console.log('decrease');
        this.setState(prevState => {
            return {count:prevState.count - 1}
        })

    }
  render() {
    return (
      <section>
        <div className='box-container'>
            <h1>Counter</h1>
            <h3>{this.state.count}</h3>
            <div className='btn-container'>
                <button id='add' onClick={this.clickToAddHandler.bind(this)}>add</button>
                <button id='decrease' onClick={this.clickToDecreaseHandler.bind(this)}>decrease</button>
            </div>

        </div>
        
      </section>
    )
  }
}
