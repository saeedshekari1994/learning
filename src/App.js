import React, { Component } from 'react'
import Users from './Users/Users'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInfo: [
        {id:1, name: 'ali', score:17.5,  web: 'me'},
        {id:2, name: 'hamed', score:18.5, web: 'mc'},
        {id:3, name: 'ahmad', score:16.3, web: 'cc'},
      ] ,
      skills: [
        {id:1, name: 'ali', web: 'react'},
        {id:2, name: 'hamed', web: 'mc'},
        {id:3, name: 'ahmad', web: 'cc'},
      ] ,
      scores: [10,15,18],
      counter: 0
    }
    setTimeout(()=>{  
      this.setState({   // rerender state after 3 seconds with new values
        userInfo:[
          {id:1, name: 'sajad', score:17.5 , web:'b'},
          {id:2, name: 'milad', score:18.5 , web:'c'},
          {id:3, name: 'morteza', score:16.3 , web:'a'},
        ]
      })
    },3000)
    this.code = 25
    this.focusHandler = this.focusHandler.bind(this)
  }
  focusHandler(){
    console.log(this);
  }
  keyDownHandler(){
    this.code += 5;
    console.log(this);
    console.log('sth is typed');
  }
  clickHandler(){
    this.code += 10;
    console.log(this);

    alert('you clicked on the button')
  }
  changeSkillsHandler(){
    this.setState({
      skills : [
        {id:1, name: 'ali', web: 'photoshop'},
        {id:2, name: 'hamed', web: 'figma'},
        {id:3, name: 'ahmad', web: 'office'},

      ]
    })
  }
  changeCounter(){
    this.setState((prevState) =>{
      return {counter: prevState.counter + 2}
    })
  }
  render() {
    return (
      <div>
        <h2>{this.code}</h2>
        <Users {...this.state.userInfo[0]}></Users>
        <Users {...this.state.userInfo[1]}></Users>
        <Users {...this.state.userInfo[2]}></Users>

        <Users {...this.state.skills[1]}></Users>
        <Users {...this.state.skills[2]}></Users>

        <button onClick = {this.clickHandler.bind(this)}>click on me</button> 
        {/* ravesh avval */}
        <input type='text' onKeyDown = {() => this.keyDownHandler()}/>
        {/* ravesh dovvom */}
        <input type='text' onFocus = {this.focusHandler}/>
        {/* ravesh sevom . tuye constructor dasture bind ro neveshtim */}
        <br/>
        <button onClick={this.changeSkillsHandler.bind(this)}>change skills</button>
        <br/>
        <button onClick={this.changeCounter.bind(this)}>change counter</button>
        <h2>{this.state.counter}</h2>
        

      </div>
    )
  }
}
