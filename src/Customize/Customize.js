import React, { Component } from 'react'
import { Modal , Button } from 'react-bootstrap'
export default class Customize extends Component {
    state = {
        showModal : true
    }
  render() {
    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal show={this.state.showModal} onHide={() => this.setState({showModal:false})}>
          <Modal.Header closeButton>
            <Modal.Title>مدال فارسی شده</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p style={{textAlign:'right'}}>آیا تمایل دارید که عضو شوید در سایت؟</p>
          </Modal.Body>
  
          <Modal.Footer style={{justifyContent: 'flex-start'}}>
            <Button variant="secondary" onClick={() => this.setState({showModal : false})} 
            style={{backgroundColor:'red'}}
            >نه ، ممنون</Button>
            <Button variant="primary" style={{backgroundColor:'green'}}>آره ، تو رو خدا</Button>
          </Modal.Footer>
        </Modal>
        <Button variant="success" onClick={() => this.setState({showModal : true})}>show Modal Again</Button>
      </div>

    )
  }
}
