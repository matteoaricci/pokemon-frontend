import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import {connect} from 'react-redux'
import { clickedTeamPoke } from "../redux/actions"
import '../Css-files/pokemonCard.css'

class PokemonCard extends Component {

    render() {
        const { pokemon } = this.props
        return (
            <Card className='poke-card' onClick={() => this.props.clickPoke(this.props.pokemon)} style={{ width: '18rem' }}>
                <Card.Body className='poke-card-body'>
                    <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
                    {pokemon.type2 !== 'null' ? <Card.Subtitle>{pokemon.type2.toUpperCase()} / {pokemon.type1.toUpperCase()}</Card.Subtitle> : <Card.Subtitle>{pokemon.type1.toUpperCase()}</Card.Subtitle>}
                    <Card.Text className="pokemon-card-stats">
                    HPT: {pokemon.hp_stat}  | ATK: {pokemon.attack_stat} | DEF: {pokemon.defense_stat} <br></br>
                    SPA: {pokemon.sp_attack_stat} | SPD: {pokemon.sp_defense_stat} | SPE: {pokemon.speed_stat}
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

export default connect(null, mapDispatchToProps)(PokemonCard)
