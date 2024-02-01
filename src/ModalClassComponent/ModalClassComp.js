import React from 'react'
import '../Modal/Modal.css'
export default class ModalClassComp extends React.Component {
    render(){
        return (
            <div className='modal-container'>
              <div className='modal'>
                {this.props.children}
                <button className='btn'>{this.props.text}</button>
                <p className='question'>{this.props.defaultValue}</p>
              </div>
            </div>
          )
        
    }
}
ModalClassComp.defaultProps = {
    defaultValue : 'setting a default value'
}