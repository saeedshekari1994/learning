import React, { Component } from 'react'
import { Container, Col, Row , Card , Button } from 'react-bootstrap'
import './Responsive.css'

export default class Responsive extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col xs={12} sm={6} md={{ span: 3, offset: 1 }} className='center-text'>first col</Col>
                <Col xs={12} sm={6} md={{ span: 3, offset: 1 }} className='center-text' order>second col</Col>
                <Col xs={12} sm={6} md={{ span: 3, offset: 1 }} className='center-text'>second col</Col>
                
            </Row>
            <Row style={{marginTop:50}}>
                <Col xs={12} sm={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="3-product-boxes_Fix.jpg" />
                        <Card.Body>
                            <Card.Title>Product Box</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="success">click to buy</Button>
                        </Card.Body>
                    </Card>

                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="3-product-boxes_Fix.jpg" />
                        <Card.Body>
                            <Card.Title>Product Box</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="success">click to buy</Button>
                        </Card.Body>
                    </Card>

                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="3-product-boxes_Fix.jpg" />
                        <Card.Body>
                            <Card.Title>Product Box</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="success">click to buy</Button>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
        
      </div>
    )
  }
}
