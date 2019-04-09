import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading';
import * as categories from './categories';
import * as posts from './posts';
import * as flags from './flags';
import * as singlePost from './singlePost';

export default combineReducers({
  ...categories,
  ...posts,
  ...flags,
  ...singlePost,
  loadingBar: loadingBarReducer,
});
