import React, { Component } from 'react'
import './Parameters.css'

export default class Parameters extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : 'sending parameters'
        }
    }
    parameterHandler(num1 , num2){
        console.log('num1 : ' + num1 + '  +  ' + 'num2 : ' + num2 + '=' + (num1+num2) );
    }
    eventHandler(x , y , event){
        console.log(x*y);
        console.log(event.target);

    }
  render() {
    return (
      <div>
        <hr/>
        <h2>{this.state.title}</h2>
        <button onClick={this.parameterHandler.bind(this, 5 , 8)}>click here</button>
        <button className='event-btn' onClick={(event) => this.eventHandler(2,6,event)}>sending event object while firing the event</button>
      </div>
    )
  }
}
