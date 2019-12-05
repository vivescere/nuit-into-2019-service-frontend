import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { simpleAction } from './actions/simpleAction';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
  <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={this.simpleAction}>click me</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;
