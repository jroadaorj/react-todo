import React, { Component } from 'react';
import './App.css';
import Todo from './Todo/Todo';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    newTodo: "",
    todos: []
  }
  
  addTodo = (event) => {
    if(event.keyCode === 13){
      this.setState({
        todos: [...this.state.todos, this.state.newTodo],
        newTodo: ""
      });
      console.log(this.state.todos);
    }
  }

  handleChange(event) {
    this.setState({newTodo: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <input 
        type="text" 
        placeholder="What needs to be done?"
        value={this.state.newTodo}
        onChange={(event) => this.handleChange(event)}  
        onKeyDown={(event) => this.addTodo(event)} />

        {this.state.todos.map((todos) => {
          return <Todo content={todos} />
          })}
 
      </div>
    );
  }
}

export default App;
