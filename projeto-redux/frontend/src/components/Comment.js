import React from 'react';
import {connect} from 'react-redux';
import {formatDate} from '../utils/helpers';
import {handleUpVote, handleDownVote} from '../actions/comments';
import VoteControls from './VoteControls';

class Comment extends React.Component {
  render() {
    const {id, upVote, downVote} = this.props;
    const {author, body, timestamp, voteScore} = this.props.comment;
    const date = formatDate(timestamp);
    return (
      <div className="comment">
        <VoteControls
          postId={id}
          upVote={upVote}
          downVote={downVote}
          voteScore={voteScore}
        />
        <div className="comment-content">
          <div className="details">
            <strong className="author">{author}</strong>{' '}
            <span className="date">{date}</span>
          </div>
          <p>{body}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({comments}, {id}) => {
  return {
    comment: comments[id],
    id,
  };
};

const mapDispatchToProps = dispatch => ({
  upVote: id => dispatch(handleUpVote(id)),
  downVote: id => dispatch(handleDownVote(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comment);
