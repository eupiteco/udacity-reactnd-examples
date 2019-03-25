import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class PostList extends React.Component {
  render() {
    const {postIds} = this.props;
    return (
      <div className="posts-list">
        {postIds.map(id => (
          <Post postId={id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({posts}) => ({
  postIds: Object.keys(posts).sort(
    (a, b) => posts[b].timestamp - posts[a].timestamp,
  ),
});

export default connect(mapStateToProps)(PostList);
