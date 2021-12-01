import React, {Component} from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';


//Importar componentes

import  {todos}  from './todos.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
  }
  render(){
    const todos = this.state.todos.map((todo, i) =>{
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge rounded-pill bg-danger mx-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
          </div>
        </div>
      )  
    })
    return(
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
          <a href="https://www.google.com/?hl=es" className ="text-white">
            Tasks
          </a>
          <span className="badge rounded-pill bg-light text-dark m-2">
              { this.state.todos.length }
          </span>
      </nav>

      <div className="container">
        <div className="row mt-4">
        { todos }
        </div>
      </div>

      <img src={logo} className="App-logo" alt="logo"></img>
      
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
