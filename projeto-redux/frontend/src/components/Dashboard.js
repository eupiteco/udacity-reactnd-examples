import React from 'react';
import {getCategories, _getCategories} from '../utils/ReadableAPI';

class Dashboard extends React.Component {
  state = {
    categories: [],
    funCat: [],
  };
  componentDidMount() {
    this.getApiCategories();
  }
  render() {
    const {categories} = this.state;
    return (
      <div>
        <h1>Dashboard</h1>
        {categories.map(cat => (
          <p key={cat.path}>{cat.name}</p>
        ))}
      </div>
    );
  }
  getApiCategories = () => {
    _getCategories().then(res => {
      const {categories, posts} = res;
      console.log(categories, posts);
    });
    getCategories().then(res => {
      this.setState(() => ({
        categories: res.categories,
      }));
    });
  };
}

export default Dashboard;
