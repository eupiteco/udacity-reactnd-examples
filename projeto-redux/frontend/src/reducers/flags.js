import {SORT_POSTS} from '../actions/posts';

export function flags(state = {sortBy: 'score'}, action) {
  switch (action.type) {
    case SORT_POSTS:
      const {sortBy} = action;
      return {
        ...state,
        sortBy,
      };
    default:
      return state;
  }
}
