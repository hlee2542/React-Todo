import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p onClick={() => this.props.makeCompleted(this.props.note.task, this.props.note.id)}>{this.props.note.task}</p>
            </div>
        )
    }
}

export default Todo;