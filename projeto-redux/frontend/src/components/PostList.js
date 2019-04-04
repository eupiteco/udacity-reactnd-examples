import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Post from './Post';

class PostList extends React.Component {
  render() {
    const {postIds} = this.props;
    return (
      <div className="posts-list">
        {postIds.map(id => (
          <Post key={id} postId={id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({posts, flags}, {match}) => {
  const sortedPosts =
    flags.sortBy === 'date'
      ? Object.keys(posts).sort(
          (a, b) => posts[b].timestamp - posts[a].timestamp,
        )
      : Object.keys(posts).sort(
          (a, b) => posts[b].commentCount - posts[a].commentCount,
        );
  const filteredPosts = match.params.category
    ? sortedPosts.filter(id => posts[id].category === match.params.category)
    : sortedPosts;

  return {
    postIds: filteredPosts,
  };
};

export default withRouter(connect(mapStateToProps)(PostList));
