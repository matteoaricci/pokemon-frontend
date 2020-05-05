import React, { Component } from 'react';
import {Card, Container, Row, ListGroup} from 'react-bootstrap'

class HomeTeam extends Component {
    constructor() {
        super();
        this.state = {
            userId: localStorage.getItem('user'),
            teams: [],
        }
    }
    componentDidMount() {
            fetch(`http://localhost:3000/users/${this.state.userId}/teams`)
            .then(resp => resp.json())
            .then(team => this.setState({
                // teams: team.teams ,
                // teamMembers: team.team_members,
                teams: team
            }))
    }
    render() {
        const teams = this.state.teams
        return (
            <Container className='user-teams'>
                <h2 className='team-header'>Your Current Teams</h2>
                {teams.map((team, index) =>
                <Row className='teams' id={team.id}>
                        <Card style={{width: '30rem'}}>
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
                </Row> 
                    )}
            </Container>
        );
    }
}

export default HomeTeam;
