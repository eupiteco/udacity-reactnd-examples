import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import Comments from './Comments';

class PostPage extends React.Component {
  render() {
    const {comments, id} = this.props;
    return (
      <div className="post-page">
        <Post postId={id} />
        <Comments comments={comments} />
      </div>
    );
  }
}

function mapStateToProps({posts}, {match}) {
  const {id} = match.params;
	console.log(id, posts)
  return {
    id,
    comments: posts[id].comments.sort(
      (a, b) => posts[b].timestamp - posts[a].timestamp,
    ),
  };
}
export default connect(mapStateToProps)(PostPage);
