import React, {useState} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

import {withRouter} from 'react-router'

const NewUserForm = ( props ) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [trainerName, setTrainerName] = useState('')

    function handleLoginSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:3000/registrations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username: username,
                                  password: password,
                                  trainer_name: trainerName})
        })
        .then(resp => resp.json())
        .then(user => {
            localStorage.setItem('user', user.user.id)
            props.history.push('/home')
        })
    }

    function validateForm() {
        return username.length > 0 && password.length > 0
    }

    return (
        <div className='new-user-form text-center'>
            <form onSubmit={handleLoginSubmit}>
                <FormGroup controlId='username'>
                    <FormLabel>Choose Your Username</FormLabel>
                    <FormControl 
                    autoFocus
                    type='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId='trainerName'>
                    <FormLabel>Choose Your Trainer Name</FormLabel>
                    <FormControl 
                    type='trainerName'
                    value={trainerName}
                    onChange={e => setTrainerName(e.target.value)}
                    />
                </FormGroup>

                <FormGroup controlId='password'>
                    <FormLabel>Choose Your Password</FormLabel>
                    <FormControl 
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>
                <div className="text-center">
                <Button className='new-user-btn' disabled={!validateForm()} type='submit'>
                    Create New User!
                </Button>
                </div>
            </form>
        </div>
    );
}

export default withRouter(NewUserForm);
