import React from 'react';
import {connect} from 'react-redux';

class Post extends React.Component {
  render() {
    const {
      author,
      body,
      category,
      commentCount,
      deleted,
      id,
      timestamp,
      title,
      voteScore,
    } = this.props.post;
    return (
      <div key={id}>
        <h2>Post</h2>
        <ul>
          <li>{author}</li>
          <li>{body}</li>
          <li>{category}</li>
          <li>{commentCount}</li>
          <li>{deleted.toString()}</li>
          <li>{id}</li>
          <li>{timestamp}</li>
          <li>{title}</li>
          <li>{voteScore}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({posts}, {postId}) => ({
  post: posts[postId],
});

export default connect(mapStateToProps)(Post);
