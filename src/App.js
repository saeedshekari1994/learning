import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Menus from './Menus/Menus'
import RightSide from './RightSide/RightSide'
import LeftSide from './LeftSide/LeftSide'
export default class App extends Component {
  render() {
    return (
      <div>
        <Container fluid>
            <Row>
                <Menus/>
                <Col xs={12} md={6}>
                  <LeftSide/>
                </Col>
                <Col xs={12} md={6}>
                  <RightSide/>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
