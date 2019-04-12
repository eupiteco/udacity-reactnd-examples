import React from 'react';
import {connect} from 'react-redux';
import {formatDate} from '../utils/helpers';
import {
  handleUpVote,
  handleDownVote,
  handleRemoveComment,
} from '../actions/comments';
import VoteControls from './VoteControls';
import {Edit as EditIcon, Trash2 as RemoveIcon} from 'react-feather';

class Comment extends React.Component {
  render() {
    const {id, upVote, downVote} = this.props;
    const {author, body, timestamp, voteScore} = this.props.comment;
    const date = formatDate(timestamp);
    return (
      <div className="comment">
        <VoteControls
          id={id}
          upVote={upVote}
          downVote={downVote}
          voteScore={voteScore}
        />
        <div className="comment-content">
          <div className="rem-ed-buttons">
            <button className="icon-btn">
              <EditIcon size={18} />
            </button>
            <button className="icon-btn" onClick={() => this.props.remove(id)}>
              <RemoveIcon size={18} />
            </button>
          </div>
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
  remove: id => dispatch(handleRemoveComment(id)),
  upVote: id => dispatch(handleUpVote(id)),
  downVote: id => dispatch(handleDownVote(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comment);
