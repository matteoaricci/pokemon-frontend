import React, { Component } from 'react';
import Login from '../components/Login.jsx'
import NewUserForm from '../components/NewUserForm'

class WelcomeScreen extends Component {
    render() {
        return (
            <div>
                <Login />
                <NewUserForm />
            </div>
        );
    }
}

export default WelcomeScreen;
