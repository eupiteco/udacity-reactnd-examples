import {RECEIVE_COMMENTS, VOTE_COMMENT} from '../actions/comments';

export function comments(state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      const {comments} = action;
      const commentsById = {};
      comments.forEach(c => {
        commentsById[c.id] = c;
      });
      return {
        ...commentsById,
      };
    case VOTE_COMMENT:
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
