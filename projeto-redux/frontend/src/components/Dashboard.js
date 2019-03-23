import React from 'react';
import {getInitialData} from '../utils/ReadableAPI';

class Dashboard extends React.Component {
  state = {
    posts: [],
    categories: [],
  };
  componentDidMount() {
    this.handleInitialdata();
  }
  render() {
		console.log(this.state)
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
  handleInitialdata = () => {
    getInitialData().then(res => {
      const {posts, categories} = res;
      this.setState(() => ({
        posts,
        categories,
      }));
    });
  };
}

export default Dashboard;
