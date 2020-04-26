import React, { Component } from 'react';
import '../Css-files/pokemonTeam.css'
import { FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import PokemonCard from '../components/PokemonCard'

class TeamCreator extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: [
                { pokemon1: {} }
            ]
        }
    }

    render() {

        const { pokemons } = this.props
        return (
            <div className="container">

                <div className="row filters">
                    <div className="col-sm pkm-species-filter">
                        <form>
                            <FormGroup>
                                <FormControl
                                    type='text'
                                    value={this.props.filter}
                                    placeholder="Search By Species"
                                    onChange={event => this.props.handleFilterChange(event)}
                                />
                            </FormGroup>
                        </form>

                        <div className="col-sm pkm-type-filter">
                            <InputGroup className="mb-3">

                            </InputGroup>
                        </div>
                    </div>

                </div>

                <div className="pokemon-grid">

                    {this.props.pokemons.map(pokemon => {
                        return <PokemonCard pokemon={pokemon} />
                    })}

                </div>
                {/* <div className="row list">
                    <div className="col-sm create-team-species">
                        Pokemon Species
                        {pokemons.map(pokemon => <li>{pokemon.name}</li>)}
                    </div>

                    <div className="col-sm create-team-type">
                        Pokemon Type
                        {pokemons.map(pokemon => pokemon.type2 != 'null' ? <li>{pokemon.type2} / {pokemon.type1}</li> : <li>{pokemon.type1}</li>)}
                    </div>

                    <div className="col-sm create-team-stat">
                        Pokmeon Stats
                        {pokemons.map(pokemon =>
                        <li>{pokemon.hp_stat}  {pokemon.attack_stat}  {pokemon.defense_stat}  {pokemon.sp_attack_stat}  {pokemon.sp_defense_stat}  {pokemon.speed_stat} </li>
                    )}
                    </div>
                </div> */}
            </div>
        );
    }
}

export default TeamCreator;
