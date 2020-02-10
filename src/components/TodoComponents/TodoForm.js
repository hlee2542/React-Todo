import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form>
                    <h1>Todo List</h1>
                    <input type='text' placeholder='Type in something to do.' value={this.props.input} onChange={event => this.props.update(event.target.value)}/>
                </form>
            </div>
        );
    }
}

export default TodoForm;