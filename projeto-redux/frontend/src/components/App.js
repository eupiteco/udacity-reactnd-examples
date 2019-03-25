import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../assets/App.css';
import {handleInitialData} from '../actions/shared';
import Dashboard from './Dashboard'
import PostList from './PostList'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}

export default connect()(App);
