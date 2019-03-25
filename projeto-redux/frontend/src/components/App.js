import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../assets/App.css';
import {handleInitialData} from '../actions/shared';
import Dashboard from './Dashboard'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default connect()(App);
