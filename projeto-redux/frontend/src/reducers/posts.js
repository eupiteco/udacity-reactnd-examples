import {ADD_POST, RECEIVE_POSTS, VOTE_POST} from '../actions/posts';
import {RECEIVE_COMMENTS} from '../actions/comments';

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
    case RECEIVE_COMMENTS:
      const commentsById = {};
      action.comments.forEach(c => {
        commentsById[c.id] = c;
      });
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          comments: commentsById,
        },
      };
    case ADD_POST:
      const {post} = action;
      return {
        ...state,
        [post.id]: post,
      };
    default:
      return state;
  }
}
