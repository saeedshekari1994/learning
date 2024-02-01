import React from 'react'
import PropTypes from 'prop-types'
import './Validation.css'

export default function Validation(props) {
  return (
    <div>
        <div className='propContainer'>
            <ul>
                <li><a href='#'>{props.message}</a></li>
                <li><a href='#'>{props.rank}</a></li>
                <li><a href='#'>{props.role}</a></li>
                <li><a href='#'>{props.isUsedCorrectly}</a></li>
            </ul>
            <button>click me</button>
        </div>
      
    </div>
  )
}
Validation.propTypes = {
    message: PropTypes.string
}
