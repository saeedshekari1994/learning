import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
export default class ReactBootStrap extends Component {
    state = {
        showAlert : true
    }
  render() {
    return (
      <div>
        <h1>React Bootstrap</h1>
        <Alert variant="success">the action is completed . now you can login</Alert>
        <br/><hr/>
        <h2>using Alert.Link</h2>
        <Alert variant="danger">if you want to visit <Alert.Link href='#'>our website</Alert.Link> you can find us on google  </Alert>
        <br/>
        <Button variant="primary">It's a primary button</Button>
        <br/><hr/>


        
        <h1 style={{textAlign:'center'}}>Alert.Heading</h1>
        <Alert variant="warning">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
                Aww yeah, you successfully read this important alert message. This
                example text is going to run a bit longer so that you can see how
                spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things
                nice and tidy.
            </p>
        </Alert>

        <br/><br/><br/><hr/>


        <h1 style={{textAlign:'center'}}>dismissible alert</h1>
        {this.state.showAlert && 
        <Alert variant="danger" onClose={() =>this.setState({showAlert : false})} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
      }
      <button onClick={() => this.setState({showAlert : true})}>click to show Alert</button>



      </div>
    )
  }
}
