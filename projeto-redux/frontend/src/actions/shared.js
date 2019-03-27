import {getInitialData} from '../utils/ReadableAPI';
import {receivePosts} from './posts.js';
import {receiveCategories} from './categories.js';

export const SET_AUTHED_USER = 'SET_AUTHED_USER';

const authedId = 'eupiteco';

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({posts, categories}) => {
      dispatch(receiveCategories(categories));
      dispatch(receivePosts(posts));
      dispatch(setAuthedUser(authedId));
    });
  };
}

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}
