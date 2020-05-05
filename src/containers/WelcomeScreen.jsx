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
            <div>
                <Button onClick={this.handleOnClick}>{this.state.buttonText}</Button>
                {this.state.currentRender === 'Login' ? 
                <Login /> : <NewUserForm />}
            </div>
        );
    }
}

export default WelcomeScreen;
