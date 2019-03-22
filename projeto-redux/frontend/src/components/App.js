import React, {Component} from 'react';
import {getCategories} from '../utils/ReadableAPI';
import '../assets/App.css';
import Dashboard from './Dashboard'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
