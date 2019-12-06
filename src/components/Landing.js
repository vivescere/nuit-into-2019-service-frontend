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
import Header from './Header';

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

class Landing extends Component {
  render() {
    const isLoggedIn = this.props.authReducer.connected;

    let loginOrOut = (isLoggedIn) ? (<Link to="/logout">Logout</Link>) : (<Link to="/login">Login</Link>);

    return (
      <div className="Landing">
        <div className="video-background">
              <div className="video-wrap">
                <div id="video" style={{overflow: 'hidden'}}>
                  <iframe src="https://www.youtube.com/embed/EmC5b-_iDtc?controls=0&amp;autoplay=1&amp;mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>

            
            <div className="caption text-center">

              <h1><span className="nipon nipon-xl">Bas les pâtes</span></h1>
              <h2 className="h3">VOTRE SITE D'AIDE ETUDIANTE</h2>
              <a className="btn btn-entrez btn-lg" href="#Allons-y">ENTREZ-DONC</a>

            </div>

          <div className="container-fluid">
            <div id="Allons-y" className="row justify-content-center">
              <div className="col-md-8 text-center">
                {/*<h1>Qu'est-ce que <span className="nipon nipon-l">La Nipponathèque</span> ?</h1>
                <p className="lead"><span className="nipon nipon-m">La Nipponathèque</span> est la référence de l'Animation Japonaise !<br/>
                  Vous trouverez ici de multiples oeuvres, des classiques aux petites perles rares.<br/>
                Commencez tout de suite votre exploration du folklore de l'Animation Japonaise en regardant les films ou les animes !</p>
                <a className="btn btn-secondary btn-sm" href="films.php">LES FILMS</a>
                <a className="btn btn-secondary btn-sm" href="animes.php">LES ANIMES</a>*/}
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

//export default Landing;

