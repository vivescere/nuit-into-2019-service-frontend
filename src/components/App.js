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

import Landing from './Landing';
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

class App extends Component {
  render() {
    const isLoggedIn = this.props.authReducer.connected;

    let loginOrOut = (isLoggedIn) ? (<Link to="/logout">Logout</Link>) : (<Link to="/login">Login</Link>);

    return (
      <div className="App">
        <Router>
          <pre>{JSON.stringify(this.props)}</pre>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{loginOrOut}</li>
            </ul>
          </nav>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;
