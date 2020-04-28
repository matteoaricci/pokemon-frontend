import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Popper from 'popper.js';
import NavBar from "./components/NavBar";
import PokemonContainer from './containers/PokemonContainer';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link 
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
     <NavBar />
     <Route path='/pokemon' component={PokemonContainer}/>
    </div>
    </Router>
  );
}

export default App;
