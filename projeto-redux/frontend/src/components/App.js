import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../assets/App.css';
import {handleInitialData} from '../actions/shared';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Dashboard} />
          <Route path="/c/:category" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
