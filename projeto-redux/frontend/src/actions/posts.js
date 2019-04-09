import {upVote, downVote, newPost } from '../utils/ReadableAPI';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ADD_POST = 'ADD_POST';
export const SORT_POSTS = 'SORT_POSTS';
export const VOTE_POST = 'VOTE_POST';

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  };
}

export function sortPosts(sortBy) {
  return {
    type: SORT_POSTS,
    sortBy,
  };
}

export function handleNewPost(post) {
  return dispatch => {
    return newPost(post).then(data => {
      console.log(data);
      dispatch(addPost(post));
    });
  };
}

export function handleUpVote(id) {
  return dispatch => {
    dispatch(upVotePost(id));
    return upVote(id).catch(e => {
      dispatch(downVotePost(id));
      console.log(e);
      alert('There was an error, try again.');
    });
  };
}

export function handleDownVote(id) {
  return dispatch => {
    dispatch(downVotePost(id));
    return downVote(id).catch(e => {
      dispatch(upVotePost(id));
      console.log(e);
      alert('There was an error, try again.');
    });
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

function upVotePost(id) {
  return {
    type: VOTE_POST,
    data: {
      id,
      vote: 1,
    },
  };
}

function downVotePost(id) {
  return {
    type: VOTE_POST,
    data: {
      id,
      vote: -1,
    },
  };
}
