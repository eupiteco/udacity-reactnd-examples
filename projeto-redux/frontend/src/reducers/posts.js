import {RECEIVE_POSTS, VOTE_POST} from '../actions/posts';

export function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      const postsById = {};
      action.posts.forEach(post => {
        postsById[post.id] = post;
      });
      return {
        ...state,
        ...postsById,
      };
    case VOTE_POST:
      const {id, vote} = action.data;
      const newScore = state[id].voteScore + vote;
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: newScore,
        },
      };
    default:
      return state;
  }
}
