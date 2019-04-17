import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { formatDate } from "../utils/helpers";
import {
  handleUpVote,
  handleDownVote,
  handleRemovePost
} from "../actions/posts";
import VoteControls from "./VoteControls";
import EditRemoveControls from "./EditRemoveControls";

class Post extends React.Component {
  static propTypes = {
    authedUser: PropTypes.string.isRequired,
    editPost: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
    post: PropTypes.object.isRequired,
    upVote: PropTypes.func.isRequired,
    downVote: PropTypes.func.isRequired,
    removePost: PropTypes.func.isRequired
  };
  render() {
    const {
      author,
      body,
      category,
      commentCount,
      id,
      timestamp,
      title,
      voteScore
    } = this.props.post;
    const { upVote, downVote, authedUser, editPost } = this.props;
    const date = formatDate(timestamp);
    return (
      <div className="post" key={id}>
        <VoteControls
          id={id}
          upVote={upVote}
          downVote={downVote}
          voteScore={voteScore}
        />
        {authedUser === author && (
          <EditRemoveControls
            removeAction={this.removePost}
            editAction={editPost}
          />
        )}
        <Link to={`/p/${id}`} className="content">
          <div className="post-header">
            <h3 className="title">{title}</h3>
            <div className="details">
              <strong className="author">{author}</strong>{" "}
              <span className="date">{date}</span>
              <div>{category}</div>
            </div>
          </div>
          <div className="post-body">
            <p>{body}</p>
            <span className="details">{commentCount} comments</span>
          </div>
        </Link>
      </div>
    );
  }
  removePost = () => {
    return this.props.removePost(this.props.postId);
  };
}

const mapStateToProps = ({ posts, flags }, { postId, details, history }) => {
  const { authedUser } = flags;
  return {
    authedUser,
    editPost: () => history.push(`/e/${postId}`),
    postId,
    post: posts !== {} ? posts[postId] : {}
  };
};

const mapDispatchToProps = dispatch => ({
  upVote: id => dispatch(handleUpVote(id)),
  downVote: id => dispatch(handleDownVote(id)),
  removePost: id => dispatch(handleRemovePost(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Post)
);
