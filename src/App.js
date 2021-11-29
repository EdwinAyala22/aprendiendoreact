import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes

import MiComponente from './components/MiComponente';

function HolaMundo(nombre, edad){
  var presentacion = (
    <div>
      <h2> Hola, soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  );
  
  return presentacion
}


function App() {
  var nombre = "Edwin Ayala Recalde";
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola, bienvenido al curso de React de Victor Robles WEB!!
        </p>
        {HolaMundo(nombre, 18)}
        <section className="componetes">

          <MiComponente />

        </section>
      </header>
      
    </div>
  );
}

export default App;
