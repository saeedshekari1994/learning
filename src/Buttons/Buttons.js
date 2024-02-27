import React, { Component } from 'react'
import { Button , Alert } from 'react-bootstrap'

export default class Buttons extends Component {
    state = {
        loading : false
    }
    clickHandler(){
        this.setState({
            loading : true
        })
        setTimeout(() => {
            this.setState({
                loading : false
            })
        },3000)
    }
  render() {
    return (
      <div>
            <h1 style={{textAlign:'center'}}>importing Alert and Button in a single import line</h1>
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
            <br/><hr/>
            <h2 style={{textAlign:'center'}}>simple buttons with different styles : </h2>
            <Button variant="danger" size='lg' style={{margin : 10}}>large Danger</Button>
            <Button variant="outline-dark" size='sm'>small Dark</Button>
            <div className="d-grid gap-2">
                <Button variant="secondary" size="lg" disabled>
                   a Block level Disabled button
                </Button>
            </div>

            <br/><hr/>
            <h2 style={{textAlign:'center'}}>usnig a button with loading state </h2>
            <Button size='large' variant='warning' onClick={this.clickHandler.bind(this)} 
            disabled={this.state.loading}> 
            {/* yani dokme tuye un 3 saniye ke loding esh true mishe , disabled beshe. baghiye zaman ha disabled false 
            khahad bud va dokme clickable hast chon loading false hast */}
                {(this.state.loading) ? 'loading...' : 'click to download file'}
                </Button>


      </div>
    )
  }
}
