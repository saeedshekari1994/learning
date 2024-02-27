import React, { Component } from 'react'
import { Card,Button, ListGroup, Nav } from 'react-bootstrap'
export default class Cards extends Component {
  render() {
    return (
      <div className='container mt-5'>
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
        <Card style={{ width: '18rem' , marginTop: 15 }}>
            <Card.Img variant="top" src="3-product-boxes_Fix.jpg" />
            <Card.Body>
                <Card.Title>A new Brand</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>portable</ListGroup.Item>
                <ListGroup.Item>good price</ListGroup.Item>
                <ListGroup.Item>easy to access</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">our website</Card.Link>
            </Card.Body>
        </Card>


        <Card style={{marginTop: 15}}>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#disabled" disabled>
                        Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

      </div>
    )
  }
}
