import React from 'react';
import {connect} from 'react-redux';
import {formatDate} from '../utils/helpers';
import {handleUpVote, handleDownVote } from '../actions/posts';

class Post extends React.Component {
  render() {
    const {
      author,
      body,
      category,
      commentCount,
      id,
      timestamp,
      title,
      voteScore,
    } = this.props.post;
    const {upVote, downVote, postId} = this.props;
    const date = formatDate(timestamp);
    return (
      <div className="post" key={id}>
        <div className="votes">
          <button onClick={() => upVote(postId)}>
            <span className="up" />
          </button>
          <div className="score">{voteScore}</div>
          <button onClick={() => downVote(postId)}>
            <span className="down" />
          </button>
        </div>
        <div className="content">
          <div className="post-header">
            <h3 className="title">{title}</h3>
            <div className="details">
              <strong className="author">{author}</strong>{' '}
              <span className="date">{date}</span>
							<div>{category}</div>
            </div>
          </div>
          <div className="post-body">
            <p>{body}</p>
            <span className="details">
              {commentCount} comments
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({posts}, {postId}) => ({
  postId,
  post: posts[postId],
});

const mapDispatchToProps = dispatch => ({
  upVote: (id) => dispatch(handleUpVote(id)),
  downVote: (id) => dispatch(handleDownVote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
