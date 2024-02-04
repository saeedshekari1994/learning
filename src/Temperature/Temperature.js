import React, { Component } from 'react'
import './Temperature.css'
export default class Temperature extends Component {
    constructor(props){
        super(props)
        this.state = {
            temper : 10,
            relatedClass : 'cold'
        }
    }
    addTempHand(){
        if(this.state.temper >= 30){
            return false
        }
        this.setState(prevState => {
            return {temper : prevState.temper +1}
        })
        if(this.state.temper >= 15){
        this.setState({relatedClass : 'hot'})
        }
    }
    lowerTempHand(){
        if(this.state.temper <= 0){
            return false
        }
        this.setState(prevState => {
            return {temper : prevState.temper - 1}
        })
        if(this.state.temper <= 15){
        this.setState({relatedClass : 'cold'})
        }

    }
  render() {
    return (
      <div>
        <section className='temp-box'>
            <div className= {`show-temp ${this.state.relatedClass}`}>
                {this.state.temper}^c
            </div>
            <div className='btn-container'>
            <button className='temp-btn' onClick={this.addTempHand.bind(this)}>+</button>
            <button className='temp-btn' onClick={this.lowerTempHand.bind(this)}>-</button>
            </div>

        </section>
      </div>
    )
  }
}
