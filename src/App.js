import React, { Component } from 'react'
import Users from './Users/Users'
import Inputs from './Forms/Inputs'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users : [
        {id : 1 , name : 'ali' , age: 29},
        {id : 2 , name : 'saeed' , age: 31},
        {id : 3 , name : 'hamed' , age: 25}
      ]
    }
  }
  render() {
    return (
      <div>
                              {/* raveshe gheyre behine */}
        {/* <Users {...this.state.users[0]}></Users>
        <Users {...this.state.users[1]}></Users>
        <Users {...this.state.users[2]}></Users> */}


                              {/* raveshe behine ba map */}

        {this.state.users.map((user)=>(
          <div key={user.id}>
            <Users {...user}></Users>
          </div>
        
          ))}
          <hr/><br/>
        <Inputs></Inputs>
      </div>
    )
  }
}
