import React, { Component } from 'react'

export default class Inputs extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName : '',
            comment: '',
            userOption : true,
            userSelect : 'CANADA'
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.commentHandler = this.commentHandler.bind(this)
        this.checkHandler = this.checkHandler.bind(this)
        this.selectHandler = this.selectHandler.bind(this)
    }

    userNameHandler(event){
        this.setState({
            userName : event.nativeEvent.target.value,
        })
    }
    submitHandler(event){
        event.preventDefault()
        alert('form is submitted')
    }
    commentHandler(event){
        this.setState({
            comment : event.nativeEvent.target.value
        })
    }
    checkHandler(event){
        this.setState({
            userOption : event.nativeEvent.target.checked
        })
    }
    selectHandler(event){
        this.setState({
            userSelect : event.nativeEvent.target.value
        })
    }
  render() {
    return (
      <div>
        <h1> forms </h1>
        <form onSubmit={this.submitHandler}>
        <label htmlFor='name'>insert your name</label>
        <input id='name' type='text' value={this.state.userName} onChange={(event)=>this.userNameHandler(event)}/>
        <h3>{this.state.userName}</h3>
        {/* DOM is rerendered because of using setState and we can see the result of updating the dom in this h3 element */}
        <br/>

        <label htmlFor='comment'>type your comment</label>
        <textarea id='comment' value={this.state.comment} onChange={this.commentHandler}>
        </textarea>

        <br/><br/>
        <label htmlFor='check'>check it if you agree</label>
        <input type='checkbox' id='check' checked={this.state.userOption} onChange={this.checkHandler}/>

        <br/><br/>

        <label htmlFor='select'>select an option</label>
        <select id='select' value={this.state.userSelect} onChange={this.selectHandler}>
            <option value="IRAN">IRAN</option>
            <option value="USA">USA</option>
            <option value="IRAQ">IRAQ</option>
            <option value="CANADA">CANADA</option>
        </select>
        
        <br/><br/>
        <label htmlFor='select'>select a hotel</label>
        <select id='select' multiple={true} value={['A' , 'B' , 'C']}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
        </select>
        <br/><br/>
        <input type='submit' value='submit form'/>
        </form>
      </div>
    )
  }
}
