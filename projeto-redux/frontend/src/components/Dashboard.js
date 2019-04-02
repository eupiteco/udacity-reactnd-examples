import React from 'react';
import {connect} from 'react-redux';
import PostList from './PostList';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <PostList />
      </div>
    );
  }
}

export default connect()(Dashboard);
