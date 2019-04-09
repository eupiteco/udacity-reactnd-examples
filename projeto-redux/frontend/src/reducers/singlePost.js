import {RECEIVE_DETAILS, RECEIVE_COMMENTS} from '../actions/singlePost';

export function currentPost(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DETAILS:
      const {details} = action;
      return {
        ...state,
        ...details,
      };
    case RECEIVE_COMMENTS: {
      const {comments} = action;
      const commentsById = {};
      comments.forEach(c => {
        commentsById[c.id] = c;
      });
      return {
        ...state,
        comments: commentsById,
      };
    }
    default:
      return state;
  }
}
