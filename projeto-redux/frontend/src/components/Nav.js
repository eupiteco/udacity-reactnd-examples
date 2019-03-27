import React from 'react';
import {connect} from 'react-redux';
import {sortPosts} from '../actions/posts';
import Categories from './Categories';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <button
          className="new-post-btn"
          onClick={() => this.props.handleNewPost()}>
          Add Post
        </button>
        <h3>Categories</h3>
        <Categories />
        <h3> Sort posts by</h3>
        <ul>
          <li>
            <button className="sort" onClick={this.props.sortByDate}>
              Date
            </button>
          </li>
          <li>
            <button className="sort" onClick={this.props.sortByScore}>
              Score
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortByDate: () => dispatch(sortPosts('date')),
    sortByScore: () => dispatch(sortPosts('score')),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Nav);
