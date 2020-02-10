import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      notes: [],
    };
  }
  handleChange(input) {
    this.setState({input: input});
  }
  addTodo() {
    this.setState(() => ({
      input: '',
      notes: this.state.notes.concat({
        task: this.state.input,
        id: Date.now(),
        completed: false
      })
    }));
  }
  makeCompleted(task, id) {
    this.setState({
      notes: this.state.notes.filter(note => note.id != id).concat({task: task, id: id, completed: true})
    });
  }
  clear() {
    this.setState(() => ({
      input: '',
      notes: this.state.notes.filter(note => note.completed === false)
    }));
  }
  render() {
    return (
      <div>
        <TodoForm input={this.state.input} update={this.handleChange.bind(this)}/>
        <button onClick={this.addTodo.bind(this)}>Add Todo</button>
        <button onClick={this.clear.bind(this)}>Clear Completed</button>
        <TodoList list={this.state.notes} makeCompleted={this.makeCompleted.bind(this)}/>
      </div>
    );
  }
}

export default App;
