import React, { Component } from 'react'
import Users from './Users/Users'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      Users : [
        {id : 1 , name: 'Ali'},
        {id : 2 , name: 'Ahmad'},
        {id : 3 , name: 'Saeed'},
        {id : 4 , name: 'Reza'},
      ]
    }
    this.removeUserHandler = this.removeUserHandler.bind(this)

  }
  removeUserHandler(userId){
    // console.log(userId);
    let newUsersArray = [...this.state.Users]
    // console.log(newUsersArray);
    let targetItemIndex = newUsersArray.findIndex(function(user){
      return user.id === userId
    })
    // console.log(targetItemIndex);
    newUsersArray.splice(targetItemIndex , 1)
    // console.log(newUsersArray);
    this.setState({
      Users : newUsersArray
    })
  }
  render() {
    return (
      <div>
        {this.state.Users.map(user =>(
          <Users key={user.id} {...user} onRemove = {this.removeUserHandler}/>
        ))}
      </div>
    )
  }
}
