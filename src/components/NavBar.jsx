import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
        );
    }
}

export default NavBar;