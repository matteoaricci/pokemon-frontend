import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Popper from 'popper.js';
import NavBar from "./components/NavBar";
import PokemonContainer from './containers/PokemonContainer';

function App() {
  return (
    <div className="App">
     <NavBar />
     <PokemonContainer />
    </div>
  );
}

export default App;
