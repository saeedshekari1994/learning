import React, { Component } from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import './Menus.css'
export default class Menus extends Component {
  render() {
    return (
      <div>
    <Navbar collapseOnSelect style={{backgroundColor: 'rgba(26, 26, 27, 0.76)'}}>
      <Container>
        <Navbar.Brand href="#home" className='color'>Customized Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='color'>courses</Nav.Link>
            <Nav.Link href="#pricing" className='color'>services</Nav.Link>
            <NavDropdown title="front-end" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">html</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                css
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">js😍</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                react😘
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"  className='color underline'>SabzLearn</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='color underline'>
              gitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}
