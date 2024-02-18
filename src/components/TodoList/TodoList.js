import React, { Component } from 'react'
import Header from './Header'
import Todo from './Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all'
        }

        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.todoTitleHandler = this.todoTitleHandler.bind(this)
        this.statusHandler = this.statusHandler.bind(this)

    }
    todoTitleHandler(event){
        let title = event.nativeEvent.target.value
        this.setState({
            todoTitle : title
        })
    }
    addTodo(event){
        event.preventDefault()
        let newTodo = {
            id : this.state.todos.length + 1, 
            completed : false,
            title : this.state.todoTitle
        }
        this.setState({
            todos : [...this.state.todos , newTodo]
        })
        this.setState({
            todoTitle : ''
        })
    }
    statusHandler(event){
        this.setState({
            status : event.nativeEvent.target.value
        })
    }
    removeTodo(todoId){
        // console.log(todoId)
        let filteredArray = this.state.todos.filter(todo => {
            return todo.id !== todoId
        })
        console.log(filteredArray);
        this.setState({
            todos : filteredArray
        })
    }
    editTodo(todoId){
        // console.log(todoId)
        let newtodoArray = [...this.state.todos]
        let targetToDO = newtodoArray.find(todo => {
            return todo.id === todoId
        })
        targetToDO.completed = !targetToDO.completed
        this.setState({
            todos : newtodoArray
        })
    }

    render() {
        return (
            <>
                <Header />
                <form onSubmit={this.addTodo}>
                    <input type="text" className="todo-input" maxLength="40" value={this.state.todoTitle} 
                    onChange={this.todoTitleHandler}/>
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select name="todos" className="filter-todo" onChange={this.statusHandler}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {this.state.status === 'completed' && this.state.todos.filter(todo => {
                            return todo.completed === true
                        }).map(todo => (
                            <Todo key={todo.id} {...todo} onEdit={this.editTodo} onRemove={this.removeTodo}/>
                        ))
                        }

                        {this.state.status === 'uncompleted' && this.state.todos.filter(todo => {
                            return todo.completed === false
                        }).map(todo => (
                            <Todo key={todo.id} {...todo} onEdit={this.editTodo} onRemove={this.removeTodo}/>
                        ))
                        }

                        {this.state.status === 'all' && this.state.todos.map(todo => (
                            <Todo key={todo.id} {...todo} onEdit={this.editTodo} onRemove={this.removeTodo}/>
                             )
                            )}
                        
                     
                    </ul>
                </div>
            </>
        )
    }
}
