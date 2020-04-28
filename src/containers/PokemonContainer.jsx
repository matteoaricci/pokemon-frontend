import React, { Component } from 'react';
import {fetchingPokemons} from "../redux/actions"
import {connect} from 'react-redux'
import PokemonList from '../components/PokemonList'

class PokemonContainer extends Component {
    componentDidMount(){
        this.props.dispatch(fetchingPokemons())
    }
    render() {
        const {pokemons} = this.props

        return (
            <div>
                {pokemons.map(pokemon => <PokemonList pokemon={pokemon}/>)}
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return (
        {pokemons: state.pokemons}
    )
    
}

export default connect(mapStateToProps)(PokemonContainer);
