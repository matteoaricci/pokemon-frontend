import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import TeamCreatorShowcase from './TeamCreatorShowcase'
import '../Css-files/teamList.css'

class TeamList extends Component {

    constructor() {
        super();
        this.state = {
            selectedPokemon: {},
            idx: '',
            viewShowcase: false,
            currentMoveset: []
        }
    }

    handleOnClick = event => {
        let index = event.target.value 
        let pokemon = this.props.team[index]
        this.setState({
            selectedPokemon: pokemon,
            idx: index,
            viewShowcase: true
        })
        
        let pokeId = pokemon.id
        fetch(`http://localhost:3000/pokemon/${pokeId}/moves`)
        .then(resp => resp.json())
        .then(moveset => this.setState({currentMoveset: moveset}))
    } 
    
    render() {
        const {team} = this.props
        
        return (
           <div>
               {team.map((pokemon, index) => 
                <Button onClick={event => this.handleOnClick(event)} className='team-list custom-btn' value={index} size="sm">{pokemon.name.toUpperCase()}</Button>
                )}

                {this.state.viewShowcase ? <TeamCreatorShowcase index={this.state.idx} pokemon={this.state.selectedPokemon} moveset={this.state.currentMoveset}/> : null}
           </div>
        );
    }
}

export default TeamList;
