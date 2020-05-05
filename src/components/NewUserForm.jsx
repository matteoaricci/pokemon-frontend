import React, {useState} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

const NewUserForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [trainerName, setTrainerName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:3000/registrations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username: username,
                                  password: password,
                                  trainer_name: trainerName})
        })
        .then(resp => resp.json())
        .then(user => console.log(user))
    }

    function validateForm() {
        return username.length > 0 && password.length > 0
    }

    return (
        <div className='new-user-form text-center'>
            <form onSubmit={handleSubmit}>
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

                <Button block disabled={!validateForm()} type='submit'>
                    Create New User!
                </Button>
            </form>
        </div>
    );
}

export default NewUserForm;
