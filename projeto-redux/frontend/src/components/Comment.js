import React from 'react';
import {connect} from 'react-redux';
import {formatDate} from '../utils/helpers';
import VoteControls from './VoteControls';

class Comment extends React.Component {
  render() {
    const {id} = this.props;
    const {author, body, timestamp, voteScore} = this.props.comment;
    const date = formatDate(timestamp);
    return (
      <div className="comment">
        <VoteControls voteScore={voteScore} />
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

const mapStateToProps = ({currentPost}, {id}) => {
  const {comments} = currentPost;
  return {
    comment: comments[id],
    id,
  };
};

export default connect(mapStateToProps)(Comment);
