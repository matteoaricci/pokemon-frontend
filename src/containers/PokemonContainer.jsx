import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchingPokemons } from "../redux/actions"
import TeamCreator from "../components/TeamCreator"
import Moveset from "../components/Moveset"
import {Button} from 'react-bootstrap'

class PokemonContainer extends Component {
    state = {
        team: [],
        selectedPokemon: {},
        showTeamList: true,
        filter: ''
    }

    componentDidMount() {
        this.props.dispatch(fetchingPokemons())
    }

    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value })
    }

    filterPokemon = (pokemons) => {
        return this.state.filter === '' ? pokemons : pokemons.filter(pokemon => pokemon.name.includes(this.state.filter))
    }

    handlePokemonClick = (event) => {
        
    }

    render() {
        const { pokemons } = this.props

        return (
            <div>
                <div className="team-create-btns">
                    <Button>Save Team</Button>
                    <Button>Add Pokemon</Button>
                </div>
                {this.state.showTeamList ?
                    <TeamCreator filter={this.filter}
                        handleFilterChange={this.handleFilterChange}
                        handlePokemonSelected={this.handlePokemonSelected}
                        pokemons={this.filterPokemon(this.props.pokemons)}

                    /> :
                    <Moveset />
                }
            </div>
        )

    }
}

const mapStateToProps = state => {
    return (
        { pokemons: state.pokemons }
    )

}

export default connect(mapStateToProps)(PokemonContainer);
