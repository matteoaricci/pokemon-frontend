import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel, Form } from "react-bootstrap";
import { loggedIn } from "../redux/actions"
import {connect} from 'react-redux'
import '../Css-files/login.css'
import {withRouter} from 'react-router'

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
        fetch('http://localhost:3000/sessions', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        })
        .then(resp => resp.json())
        .then(user => localStorage.setItem('user', user.user.id))
        this.props.history.push('/home')
        
    }

    validateForm(){
        return this.state.username.length === 0 && this.state.password.length === 0
    }
    render() {
        return (
            <div className="Login text-center">
                <Form onSubmit={event => this.handleSubmit(event)}>
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
                <Button onClick={event => this.handleSubmit(event)} className='login-button' block disabled={this.validateForm()} type='submit'>
                    Login
                </Button>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return (
        { login: (user) => dispatch(loggedIn(user)) }
    )
}

// export default connect(null, mapDispatchToProps)(PokemonCard)


export default withRouter(connect(null, mapDispatchToProps)(Login));
