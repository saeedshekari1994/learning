import React from 'react'
import './Box.css'

export default function Box(props) {
  return (
    
        <div id='box-container'>
            <h2 className='text'>{props.text}</h2>
            <img src={props.src} alt='pic' id='pict'/>
            <p className='price'>{props.price}</p>
            <p className='explain'>{props.explain}</p>
            <button className='box-btn'>Add to cart</button>
        </div>
    
  )
}
