import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchingPokemons} from "../redux/actions"

class PokemonContainer extends Component {
    componentDidMount(){
        this.props.dispatch(fetchingPokemons())
    }
    render() {
        const {pokemons } = this.props

        return (
            <ul>
                {pokemons.map(pokemon => 
                <li key = {pokemon.id}>{pokemon.name}</li>
                    )}
            </ul>
        )
        
    }
}

const mapStateToProps = state => {
    return (
        {pokemons: state.pokemons}
    )
    
}

export default connect(mapStateToProps)(PokemonContainer);
