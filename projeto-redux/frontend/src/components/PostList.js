import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class PostList extends React.Component {
  render() {
    const {postIds} = this.props;
    return (
      <div className="posts-list">
        {postIds.map(id => (
          <Post className="post" key={id} postId={id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({posts, flags} ) => {
  const postIds = flags.sortBy === "date"
    ? Object.keys(posts).sort((a, b) => posts[b].timestamp - posts[a].timestamp)
    : Object.keys(posts).sort(
        (a, b) => posts[b].commentCount - posts[a].commentCount,
      );

  return {
    postIds,
  };
};

export default connect(mapStateToProps)(PostList);
