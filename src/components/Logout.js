import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logoutAction } from '../actions/authActions';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  logoutAction: () => dispatch(logoutAction())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class Logout extends Component {
    componentDidMount() {
        localStorage.clear()
        this.props.logoutAction();
    }

    render() {
        if (!this.props.authReducer.connected) {
            return <Redirect to="/" />;
        }

        return <div>Logging out</div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
