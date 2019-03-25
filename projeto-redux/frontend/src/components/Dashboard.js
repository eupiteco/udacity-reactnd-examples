import React from 'react';
import {connect} from 'react-redux';
import PostList from './PostList'
import Categories from './Categories'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
				<Categories />
				<PostList />
      </div>
    );
  }
}

export default connect()(Dashboard);
