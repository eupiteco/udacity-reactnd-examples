import React from 'react';
import {connect} from 'react-redux';
import {handleSinglePost} from '../actions/singlePost';
import Post from './Post';
import CommentsList from './CommentsList';

class PostPage extends React.Component {
  componentDidMount() {
    this.props.handlePostDetails(this.props.id);
  }

  render() {
    const {commentsIds, id} = this.props;
    return (
      <div className="post-page">
        <Post postId={id} details />
        <CommentsList />
      </div>
    );
  }
}

const mapStateToProps = ({currentPost}, {match}) => {
  const {id} = match.params;
  return {
    id,
  };
};

const mapDispatchToProps = dispatch => ({
  handlePostDetails: id => dispatch(handleSinglePost(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPage);
