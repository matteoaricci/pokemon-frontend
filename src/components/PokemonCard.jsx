import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'

class PokemonCard extends Component {
    render() {
        const { pokemon } = this.props
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
                    {pokemon.type2 != 'null' ? <Card.Subtitle>{pokemon.type2} / {pokemon.type1}</Card.Subtitle> : <Card.Subtitle>{pokemon.type1}</Card.Subtitle>}
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default PokemonCard;
