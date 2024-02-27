import React, { Component } from 'react'
import { Modal,Button } from 'react-bootstrap'

export default class Modals extends Component {
    state = {
        showModal : true
    }
  render() {
    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal show={this.state.showModal} centered onHide={() => this.setState({showModal:false})}>
          <Modal.Header closeButton>
            <Modal.Title>login request</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>Do you want to</p>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setState({showModal : false})}>No, Thanks</Button>
            <Button variant="primary">Yes Please</Button>
          </Modal.Footer>
        </Modal>
        <Button variant="success" onClick={() => this.setState({showModal : true})}>show Modal Again</Button>
      </div>
    )
  }
}
