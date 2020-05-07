import React, { Component } from 'react';
import Login from '../components/Login.jsx'
import NewUserForm from '../components/NewUserForm'
import {Button} from 'react-bootstrap'

class WelcomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            currentRender: 'Login',
            buttonText: 'Switch to Create New User'
        }
    }

    handleOnClick = () => {
        if (this.state.currentRender === 'Login') {
            this.setState({currentRender: 'NewUser', buttonText: 'Switch to Login'})
        } else {
            this.setState({currentRender: 'Login', buttonText: 'Switch to Create New User'})
        }
    }
    render() {
        return (
            <div className='welcome-components'>
                <div className="welcome-border">
                <Button className='welcome-btn' onClick={this.handleOnClick}>{this.state.buttonText}</Button>
                {this.state.currentRender === 'Login' ? 
                <Login /> : <NewUserForm />}
                </div>
                <img src={require('../images/ferliagatr-lg.png')} alt="pokemon"/>
            </div>
        );
    }
}

export default WelcomeScreen;
