import React, { Component } from 'react'
import './List.css'
import { FaUserClock } from "react-icons/fa"
import { GiGamepad } from "react-icons/gi"
import { MdOutlinePhoneInTalk } from "react-icons/md";
export default class List extends Component {
  render() {
    return (
        
        <>
            <br/><hr/><br/>
            <li><FaUserClock className='icon' />Sibling1</li>
            <li><GiGamepad className='icon'/>Sibling2</li>
            <li><MdOutlinePhoneInTalk className='icon' />Sibling3</li>
        </>
    )
  }
}
