import {getComments} from '../utils/ReadableAPI';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export function handleComments(id) {
  return dispatch => {
    return getComments(id).then(comments => {
      dispatch(receiveComments(comments, id));
    });
  };
}

function receiveComments(comments, id) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
    id,
  };
}
