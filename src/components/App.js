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
    return (
      <div className="App">
        <Router>
          <pre>{JSON.stringify(this.props)}</pre>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/login">
              <Login />
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
