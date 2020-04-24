import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import '../Css-files/login.css'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    validateForm(){
        return this.state.username.length === 0 && this.state.password.length === 0
    }
    render() {
        return (
            <div className="Login text-center">
                <form onSubmit={event => this.handleSubmit(event)}>
                <FormGroup controlId='username'>
                    <FormLabel>Username</FormLabel>
                    <FormControl
                    autoFocus
                    type='username' 
                    value={this.state.username}
                    onChange={e => {this.setState({username: e.target.value}); console.log(this.validateForm())}}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl 
                    type='password'
                    value={this.state.password}
                    onChange={e => {this.setState({password: e.target.value}); this.validateForm()}}
                    />
                </FormGroup>
                </form>
                <Button className='login-button' block disabled={this.validateForm()} type='submit'>
                    Login
                </Button>
            </div>
        );
    }
}

export default Login;
