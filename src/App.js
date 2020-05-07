import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavBar from "./components/NavBar";
import PokemonContainer from './containers/PokemonContainer';
import Home from './components/Home'
import WelcomeScreen from './containers/WelcomeScreen'
import BattleContainer from './containers/BattleContainer'
import TeamViewer from './components/TeamViewer' 
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    }
  }

  componentDidMount() {
    let currentUser = localStorage.getItem('user')
    this.setState({user: currentUser})
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className='components-in-app'>
          <NavBar />
          {/* <Route path='/createteam' component={CreateTeam} /> */}
          <Route path='/viewteam' component={TeamViewer} />
          <Route path='/newteam' component={PokemonContainer}/>
          <Route exact path='/' component={WelcomeScreen} />
          <Route path='/battlecontainer' component={BattleContainer} />
          <Route exact path='/home' component={Home} />
          </div>
        </div>
      </Router>
    );
    }
}

export default App;
