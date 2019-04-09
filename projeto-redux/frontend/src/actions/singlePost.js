import {getSinglePost} from '../utils/ReadableAPI';

export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export function handleSinglePost(id) {
  return dispatch => {
    return getSinglePost(id).then(({details, comments}) => {
      dispatch(receiveDetails(details));
      dispatch(receiveComments(comments, id));
    });
  };
}

function receiveDetails(details) {
  return {
    type: RECEIVE_DETAILS,
    details,
  };
}

export function receiveComments(comments, id) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
    id,
  };
}
