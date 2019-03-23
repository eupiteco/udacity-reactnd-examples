import {getInitialData} from '../utils/ReadableAPI';
import {receivePosts} from './posts.js';
import {receiveCategories} from './categories.js';

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({posts, categories}) => {
      dispatch(receiveCategories(categories));
      dispatch(receivePosts(posts));
    });
  };
}
