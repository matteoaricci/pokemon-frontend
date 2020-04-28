import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class TeamCreatorShowcase extends Component {
    componentDidMount() {
        fetch(`http://localhost:3000/pokemon/${this.props.pokemon.id}/moves`)
        .then(resp => resp.json())
        .then(moves => console.log(moves))
    }
    
    render() {
        const {pokemon} = this.props
        return (
            <div>
                species: {pokemon.name}  type(s): {pokemon.type1}

                <Form>
                    <Form.Group>
                        <Form.Control type='text'  placeholder="Move One"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='text'  placeholder="Move Two"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='text'  placeholder="Move Three"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='text'  placeholder="Move Four"/>
                    </Form.Group>

                    <Button>

                    </Button>
                </Form>
            </div>
        );
    }
}

export default TeamCreatorShowcase;
