import React, { Component } from 'react'
import {Form , Button} from 'react-bootstrap'
export default class LeftSide extends Component {
  render() {
    return (
      <div>
    <Form style={{marginTop:150}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
            <Form.Text className="text-muted">
            entering your name is obligatory.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" type="submit">
            Login
        </Button>
    </Form>
      </div>
    )
  }
}
