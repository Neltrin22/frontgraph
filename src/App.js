import logo from './logo.svg';
import './App.css';
import SearchFlights from './SearchFlights';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Buscar Vuelos</h1> {/* Cambié el texto a un encabezado */}
        <SearchFlights /> {/* Agregando el componente SearchFlights aquí */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
