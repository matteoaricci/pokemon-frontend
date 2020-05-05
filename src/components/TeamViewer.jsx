import React, { Component } from 'react';

class TeamViewer extends Component {
    constructor() {
        super();
        this.state = {
            userId: localStorage.getItem('user')
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3000/user_teams/${this.state.userId}`)
        .then(resp => resp.json())
        .then(team => console.log(team))
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default TeamViewer;
