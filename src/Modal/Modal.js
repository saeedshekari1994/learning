import React from 'react'
import './Modal.css'

export default function Modal({children}) {
  return (
    <div className='modal-container'>
      <div className='modal'>
        {children}
      </div>
    </div>
  )
}
