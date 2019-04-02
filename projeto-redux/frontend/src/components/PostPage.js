import React from 'react';
import {withRouter} from 'react-router-dom';
import Post from './Post';

const PostPage = ({match}) => {
  const {id} = match.params;
  return <Post className="post extended" postId={id} extended />;
};

export default withRouter(PostPage);
