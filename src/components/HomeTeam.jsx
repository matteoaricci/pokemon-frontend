import React, { Component } from 'react';
import {Card, Container, ListGroup} from 'react-bootstrap'

class HomeTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            teams: [],
        }
    }
    componentDidMount() {
            fetch(`http://localhost:3000/users/${this.props.userId}/teams`)
            .then(resp => resp.json())
            .then(team => this.setState({
                teams: team
            }))
        
    }
    render() {
        const teams = this.state.teams
        if (this.state.teams.length > 0) {
            return (
                <Container className='user-teams'>
                    <h2 className='team-header'>Your Current Teams</h2>
                    <div className='teams-grid'>
                    {teams.map((team, index) =>
                            <Card style={{'width': '350px'}}>
                                <Card.Header>Team: {index + 1}</Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {team.pokemons.map(pokemon => 
                                        <ListGroup.Item>
                                            <span className='pokemon-name'>{pokemon.name.toUpperCase()}</span>
                                            <span className='pokemon-types'>
                                                {pokemon.type2 === 'null' ? pokemon.type1 : `${pokemon.type2} / ${pokemon.type1}`}
                                            </span>
                                            </ListGroup.Item>
                                                )}
                                    </ListGroup>
                                </Card.Body> 
                            </Card>
                        )}
                    </div> 
                </Container>
            );
        } else {
            return (
                <div>
                    Loading Teams
                </div>
            )
        }
    }
}

export default HomeTeam;
