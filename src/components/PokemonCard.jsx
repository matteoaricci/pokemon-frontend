import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import { clickedTeamPoke } from "../redux/actions"
import '../Css-files/pokemonCard.css'

class PokemonCard extends Component {

    render() {
        const { pokemon } = this.props
        return (
            <Card onClick={() => this.props.clickPoke(this.props.pokemon)} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
                    {pokemon.type2 != 'null' ? <Card.Subtitle>{pokemon.type2} / {pokemon.type1}</Card.Subtitle> : <Card.Subtitle>{pokemon.type1}</Card.Subtitle>}
                    <Card.Text className="pokemon-card-stats">
                    HP: {pokemon.hp_stat} | ATK: {pokemon.attack_stat} | DEF: {pokemon.defense_stat} 
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return (
        { clickPoke: (poke) => dispatch(clickedTeamPoke(poke)) }
    )
}

const mapStateToProps = state => {

}

export default connect(null, mapDispatchToProps)(PokemonCard)
