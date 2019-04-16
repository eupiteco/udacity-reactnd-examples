import React from 'react';
import {connect} from 'react-redux';
import {formatDate} from '../utils/helpers';
import {
  handleUpVote,
  handleDownVote,
  handleRemoveComment,
} from '../actions/comments';
import EditComment from './EditComment';
import VoteControls from './VoteControls';
import EditRemoveControls from './EditRemoveControls';
import {Edit as EditIcon, Trash2 as RemoveIcon} from 'react-feather';

class Comment extends React.Component {
  state = {
    isEditing: false,
  };

  render() {
    const {id, upVote, downVote, authedUser} = this.props;
    const {author, body, timestamp, voteScore} = this.props.comment;
    const date = formatDate(timestamp);
    if (this.state.isEditing) {
      return <EditComment id={id} cancelAction={this.cancelEditing} />;
    }
    return (
      <div className="comment">
        <VoteControls
          id={id}
          upVote={upVote}
          downVote={downVote}
          voteScore={voteScore}
        />
        <div className="comment-content">
          {authedUser === author && (
            <EditRemoveControls
              size="s"
              editAction={this.startEditing}
              removeAction={this.removeComment}
            />
          )}
          <div className="details">
            <strong className="author">{author}</strong>{' '}
            <span className="date">{date}</span>
          </div>
          <p>{body}</p>
        </div>
      </div>
    );
  }

  removeComment = () => {
    return this.props.remove(this.props.id);
  };

  startEditing = () => {
    return this.setState(() => ({
      isEditing: true,
    }));
  };

  cancelEditing = () => {
    return this.setState(() => ({
      isEditing: false,
    }));
  };
}

const mapStateToProps = ({comments, flags}, {id}) => {
  const {authedUser} = flags;
  return {
    comment: comments[id],
    authedUser,
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
