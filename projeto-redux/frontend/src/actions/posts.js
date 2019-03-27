import {upVote, downVote} from '../utils/ReadableAPI';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
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
