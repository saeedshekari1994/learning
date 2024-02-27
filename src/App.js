import ReactBootStrap from './ReactBootStrap/ReactBootStrap'
import React, { Component } from 'react'
import Buttons from './Buttons/Buttons'
import Cards from './Cards/Cards'
import Modals from './Modals/Modals'
import Customize from './Customize/Customize'
import Responsive from './Responsive/Responsive'
export default class App extends Component {
  render() {
    return (
      <div>
          <h1>hello world! we are using bootstrap css in here</h1>
          <hr/>
          <button type="button" className="btn btn-success">Success</button><br/><br/>
          <button type="button" className="btn btn-outline-secondary">hover me</button>
          <hr/>
          <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
          </div>
          <hr/>
          <button type="button" class="btn btn-primary">
            Profile <span class="badge badge-light">9</span>
            <span class="sr-only">unread messages</span>
          </button>
          <hr/>
          <ReactBootStrap/>
          <br/><br/><br/><br/><hr/>
          <Buttons/>
          <br/><br/><br/><br/><hr/>
          <Cards/>
          <br/><br/><br/><br/><hr/>
          <Modals/>
          <hr/><br/><br/><br/><br/>
          <Customize/>
          <hr/><br/><br/><br/><br/>
          <Responsive/>
      </div>
    )
  }
}

