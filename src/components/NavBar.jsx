import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {

    handleLogout = () => {
        localStorage.clear();
    }
    render() {
        return (
            <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light">
                 <Link className="navbar-brand" to="/">PokeBattle</Link>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>

                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" >

                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/battle">Battle</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Teams
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/newteam">Create New Team</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/editteam">Edit Teams</Link>
                        </div>
                    </li>
                    </ul>

                    <ul className='navbar-nav'>
                        <li className="nav-item ml-auto">
                            <Link onClick={this.handleLogout} className="navbar-nav nav-link" to='/'>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
