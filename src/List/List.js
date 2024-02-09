import React, { Component } from 'react'
import { FaUserClock } from "react-icons/fa"
import { GiGamepad } from "react-icons/gi"
import { MdOutlinePhoneInTalk } from "react-icons/md";
export default class List extends Component {
  render() {
    return (
        
        <>
            <br/><hr/><br/>
            <li><FaUserClock />Sibling1</li>
            <li><GiGamepad />Sibling2</li>
            <li><MdOutlinePhoneInTalk />Sibling3</li>
        </>
    )
  }
}
