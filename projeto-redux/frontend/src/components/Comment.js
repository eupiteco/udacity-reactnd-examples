import React from 'react';
import {connect} from 'react-redux';
import {formatDate} from '../utils/helpers';

class Comment extends React.Component {
  render() {
    const {id} = this.props;
    const {author, body, timestamp, voteScore} = this.props.comment;
    const date = formatDate(timestamp);
    return (
      <div className="comment">
        <p>{author}</p>
        <p>{body}</p>
        <p>{date}</p>
        <p>{voteScore}</p>
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
