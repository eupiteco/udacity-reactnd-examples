import React from 'react';
import {connect} from 'react-redux';
import Comment from './Comment';

class CommentsList extends React.Component {
  render() {
    const {commentsIds} = this.props;
    return (
      <div className="comment-list">
        {commentsIds.map(id => {
          return <Comment id={id} key={id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = ({currentPost}) => {
  const {comments} = currentPost;
  const commentsIds = comments
    ? Object.keys(comments).sort(
        (a, b) => comments[b].timestamp - comments[a].timestamp,
      )
    : [];
  return {
    commentsIds,
  };
};
export default connect(mapStateToProps)(CommentsList);
