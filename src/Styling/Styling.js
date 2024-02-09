import React, { Component } from 'react'
import './Styling.css'

export default class Styling extends Component {
  render() {
    return (
        
      <div>
        <br/><hr/>
        <p style={{fontSize:'3rem' }}>this element gets font-size from inline-css and gets color and text-align from external css</p>
        <h3>this element gets its style from App.js</h3>
      </div>
    )
  }
}
