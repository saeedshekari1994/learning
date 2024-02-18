import React, { Component } from 'react'

export default class Todo extends Component {
    editCompleted(id){
        this.props.onEdit(id)
    }
    removeToDo(id){
        this.props.onRemove(id)
    }

    render() {
        let {id , completed, title} = this.props
        return (
            // 'completed' class for completed todos
            <div className={`todo ${completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{title}</li>

                <button className="check-btn" onClick={this.editCompleted.bind(this , id)}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={this.removeToDo.bind(this , id)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}