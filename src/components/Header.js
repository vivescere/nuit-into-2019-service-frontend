import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { simpleAction } from '../actions/simpleAction';
import { loginAction } from '../actions/authActions';

import Login from './Login';
import Logout from './Logout';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  loginAction: (email, password) => dispatch(loginAction(email, password))
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class Header extends Component {
    render() {
        const isLoggedIn = this.props.authReducer.connected;

        let loginOrOut = (isLoggedIn) ? (<Link className="nav-link mt-2" to="/logout">Logout</Link>) : (<Link className="nav-link mt-2" to="/login">Login</Link>);

        return (
            <nav className="navbar navbar-expand-xl navbar-dark fixed-top">
                <div className="container text-justify-center">
                    <a className="navbar-brand" href="index.php"><img src="img/chibi/<?php echo $_SESSION['theme']; ?>.png" alt="logo du site" alt="La Nipponathèque" /></a>

                    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <Link className="nav-link mt-2" to="/">Home</Link>
                        <a href="/wiki.html" class="nav-link mt-2">Wiki</a>
                        {loginOrOut}
                    </div>

                </div>
            </nav>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

