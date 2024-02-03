import React from 'react'

export default function Users(props) {
    
  return (
    <div>
        <li>{props.name}</li>
        
        <li>{props.web}</li>
    </div>
  )
}
