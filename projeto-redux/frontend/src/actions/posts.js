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

export function upVotePost(id) {
  return {
    type: VOTE_POST,
    data: {
      id,
      vote: 1,
    },
  };
}

export function downVotePost(id) {
  return {
    type: VOTE_POST,
    data: {
      id,
      vote: -1,
    },
  };
}
