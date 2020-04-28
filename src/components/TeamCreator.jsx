import React, { Component } from 'react';
import '../Css-files/pokemonTeam.css'
import { FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import PokemonCard from '../components/PokemonCard'
import {connect} from 'react-redux'
import TeamList from './TeamList'


class TeamCreator extends Component {
    constructor() {
        super();
        this.state = {
            team: []
        }
    }

    render() {

        const { pokemons } = this.props
        const { team } = this.props
        return (
            <div className="container">
                <div className="team-list">
                    <TeamList team={team}/>
                </div>
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
                        {/* <div className="col-sm pkm-type-filter">
                            <InputGroup className="mb-3">

                            </InputGroup>
                        </div> */}
                    </div>
                </div>
                <div className="pokemon-grid">
                    {this.props.pokemons.map(pokemon => {
                        return <PokemonCard pokemon={pokemon} />
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return (
        { team: state.team }
    )
}

export default connect(mapStateToProps)(TeamCreator);
