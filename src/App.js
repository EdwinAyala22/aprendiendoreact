import React, {Component} from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';


//Importar componentes

import  {todos}  from './todos.json';
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    if (window.confirm('¿Desea eliminar esta tarea?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      });
    }
    }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render(){
    const todos = this.state.todos.map((todo, i) =>{
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center pt-3">
              <h3>{todo.title}</h3>
              <span className="badge rounded-pill bg-danger ms-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )  
    })
    return(
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
          <a href="/" className ="navbar-brand text-white">
            Tasks
          </a>
          <span className="badge rounded-pill bg-light text-dark m-2">
              { this.state.todos.length }
          </span>
      </nav>

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4 text-center">
            <img src={logo} className="App-logo" alt="logo"></img>
            <TodoForm onAddTodo={this.handleAddTodo} ></TodoForm>
          </div>
          <div className="col-md-8">
            <div className="row">
            
              { todos }
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
}

/*function App() {
  constructor(props) {
    super(props);
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
          <a className="text-white">
            Tasks
          </a>
      </nav>
      <img src={logo} className="App-logo" alt="logo"></img>
      
    </div>
  );
}*/

export default App;
