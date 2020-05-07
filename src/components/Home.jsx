import React, { Component } from 'react';
import Forum from './Forum'
import HomeTeam from './HomeTeam'
import '../Css-files/homepage.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            user_id: null,
            currentUser: {},
            teams: []
        }
    }

    componentDidMount(){
        console.log(localStorage.getItem('user'))
        this.setState({user_id: localStorage.getItem('user')}, () => {
            fetch(`http://localhost:3000/users/${this.state.user_id}`)
            .then(resp => resp.json())
            .then(user => this.setState({currentUser: user}))  
        })
    }
   
    render() {
        return (
            <div className='home-page-components'>
                {this.state.currentUser.trainer_name ? 
            <h3 className="welcome-banner">Welcome {this.state.currentUser.trainer_name}</h3> :
                    null}
                    
                    <div className="components-on-home">
                        <Forum userId={this.state.user_id}/>
                        {this.state.user_id &&  
                        <HomeTeam user={this.state.currentUser} userId={this.state.user_id}/>
                        
                        }
                    </div>
                

            </div>
        );
    }
}

export default Home;
