import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../assets/App.css';
import {handleInitialData} from '../actions/shared';
import Dashboard from './Dashboard';
import Nav from './Nav';
import PostPage from './PostPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="main-section">
              <Route path="/" exact component={Dashboard} />
              <Route path="/c/:category" component={Dashboard} />
              <Route path="/p/:id" component={PostPage} />
            </div>
            <Nav />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
