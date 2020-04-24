import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Popper from 'popper.js';
import NavBar from "./components/NavBar";
import PokemonContainer from './containers/PokemonContainer';
import Home from './components/Home'
import Login from './components/Login'
import NewUserForm from './components/NewUserForm'
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
        {/* <Route path='/createteam' component={CreateTeam} /> */}
        {/* <Route path='/editteam' component={EditTeam} /> */}
        {/* <PokemonContainer /> */}
        <Route path='/login' component={Login} />
        <Route path='/newuser' component={NewUserForm}/>
        {/* <Route path='/' component={Home} /> */}
      </div>
    </Router>
  );
}

export default App;
