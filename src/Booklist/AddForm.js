import React, { Component } from 'react'
import Book from './Book'

export default class AddForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            books: [],
            title: '',
            author: '',
            year: '',
        }
        this.titleHandler = this.titleHandler.bind(this)
        this.authorHandler = this.authorHandler.bind(this)
        this.yearHandler = this.yearHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    titleHandler(event){
        let titleValue = event.nativeEvent.target.value
        this.setState({
            title : titleValue
        })
        
    }
    authorHandler(event){
        let authorValue = event.nativeEvent.target.value
        this.setState({
            author : authorValue
        })
        
    }
    yearHandler(event){
        let yearValue = event.nativeEvent.target.value
        this.setState({
            year : yearValue
        })
        
    }
    submitHandler(event){
        event.preventDefault()
        let {title, author , year} = this.state
        if(title && author && year){
        let newBooksArray = [...this.state.books]
        let newBook = {
            id : this.state.books.length + 1,
            title, //or title : title ,
            author, //or author : author ,
            year  //or year : year ,
        }
        newBooksArray.push(newBook)
        this.setState({
            books : newBooksArray
        })
        }
       this.setState({
        title : '',
        author : '' , 
        year : ''
       })
        
    }

    render() {
        return (
            <>
                <form id="book-form" autoComplete="off" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className="form-control" value={this.state.title} 
                        onChange={this.titleHandler}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" className="form-control" value={this.state.author} 
                        onChange={this.authorHandler}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input type="text" id="year" className="form-control" value={this.state.year} 
                        onChange={this.yearHandler}/>
                    </div>
                    <input type="submit" value="Add Book" className="btn btn-warning btn-block add-btn" />
                </form>
                <table className="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                        {this.state.books.length> 0 && this.state.books.map(book =>(
                            <Book key={book.id} {...book}/>
                        ))}
                        {/* <Book /> */}
                    </tbody>
                </table>


            </>
        )
    }
}
