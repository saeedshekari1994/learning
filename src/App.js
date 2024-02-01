import React, { Component } from 'react'
import Users from './Users/Users'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInfo: [
        {id:1, name: 'ali', score:17.5,},
        {id:2, name: 'hamed', score:18.5,},
        {id:3, name: 'ahmad', score:16.3,},
      ]
    }
    setTimeout(()=>{  
      this.setState({   // rerender state after 3 seconds with new values
        userInfo:[
          {id:1, name: 'sajad', score:17.5,},
          {id:2, name: 'milad', score:18.5,},
          {id:3, name: 'morteza', score:16.3,},
        ]
      })
    },3000)
  }
  keyDownHandler(){
    console.log('sth is typed');
  }
  clickHandler(){
    alert('you clicked on the button')
  }
  render() {
    return (
      <div>
        <Users {...this.state.userInfo[0]}></Users>
        <Users {...this.state.userInfo[1]}></Users>
        <Users {...this.state.userInfo[2]}></Users>
        <input type='text' onKeyDown = {this.keyDownHandler}/>
        <button onClick = {this.clickHandler}>click on me</button>
        

      </div>
    )
  }
}
