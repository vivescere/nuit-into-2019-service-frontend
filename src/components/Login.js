import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { simpleAction } from '../actions/simpleAction';
import { loginAction } from '../actions/authActions';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  loginAction: (token) => dispatch(loginAction(token))
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      message: ''
    };
  }
  simpleAction = (event) => {
    this.props.loginAction('test@test.com', 'password');
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const [email, password] = [event.target.email.value, event.target.password.value];

    // Set loading state
    this.setState({ loading: true, message: '' });

    fetch('/api/v1/users/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
        if (res.status === 'error') {
          this.setState({ loading: false, message: res.message });
          return;
        }

        // will redirect
        this.props.loginAction(res.token);
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  render() {
    if (this.props.authReducer.connected) {
      return <Redirect to="/" />;
    }

    return (
      <div className="Login">
        <p>{this.state.message}</p>

        <form onSubmit={this.handleSubmit}>
          <input id="email" name="email" placeholder="email" type="email" disabled={this.state.loading} />
          <input id="password" name="password" placeholder="***" type="password" disabled={this.state.loading} />
          <input type="submit" value="Log in" disabled={this.state.loading} />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
