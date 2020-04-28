import React, { Component } from 'react';

class PokemonList extends Component {
    render() {
        const pokemon = this.props.pokemon
        return (
            <div>
                {pokemon.name.toUpperCase()}
            </div>
        );
    }
}

export default PokemonList;
