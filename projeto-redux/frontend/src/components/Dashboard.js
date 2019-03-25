import React from 'react';
import {connect} from 'react-redux';
import PostList from './PostList';
import Nav from './Nav';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <PostList />
				<Nav />
      </div>
    );
  }
}

export default connect()(Dashboard);
