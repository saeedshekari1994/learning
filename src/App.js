import React, { Component } from 'react'
import AddForm from './Booklist/AddForm'
import Header from './Header/Header'
export default class App extends Component {

    render() {
        return (
            <div className='container mt-4'>
                <Header></Header>
                <AddForm></AddForm>
            </div>
        )
    }
}
