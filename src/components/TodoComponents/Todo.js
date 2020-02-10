import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.note.completed ? <p className='completed' onClick={() => this.props.makeCompleted(this.props.note.task, this.props.note.id)}>{this.props.note.task}</p> : <p onClick={() => this.props.makeCompleted(this.props.note.task, this.props.note.id)}>{this.props.note.task}</p>}
                
            </div>
        )
    }
}

export default Todo;