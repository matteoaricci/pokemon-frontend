import React, { Component, Fragment } from 'react';
import Forum from './Forum'
import HomeTeam from './HomeTeam'
import '../Css-files/homepage.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            user_id: localStorage.getItem('user'),
            currentUser: {}
        }
    }

    componentWillMount() {
        fetch(`http://localhost:3000/users/${this.state.user_id}`)
        .then(resp => resp.json())
        .then(user => this.setState({currentUser: user}))
    }
    render() {
        return (
            <div className='home-page-components'>
                {this.state.currentUser.trainer_name ? 
            <h3 className="welcome-banner">Welcome {this.state.currentUser.trainer_name}</h3> :
                    null}
                <Forum userId={this.state.user_id}/>
                <HomeTeam user={this.state.currentUser}/>
            </div>
        );
    }
}

export default Home;
