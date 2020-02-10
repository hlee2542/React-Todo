import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.list.length ? this.props.list.map(note => <Todo note={note} makeCompleted={this.props.makeCompleted}/>) : "Nothing to do."}
            </div>
        )
    }
}

export default TodoList;