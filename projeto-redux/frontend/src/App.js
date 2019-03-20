import React, {Component} from 'react';
import './App.css';
import {getCategories} from './utils/ReadableAPI';

class App extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getApiCategories();
  }
  render() {
    const {categories} = this.state;
    return (
      <div className="App">
        Edit <code>src/App.js</code> and save to reload.
        {categories.map(cat => (
          <p key={cat.path}>{cat.name}</p>
        ))}
      </div>
    );
  }
  getApiCategories = () => {
    getCategories().then(res => {
      this.setState(() => ({
        categories: res.categories,
      }));
    });
  };
}

export default App;
