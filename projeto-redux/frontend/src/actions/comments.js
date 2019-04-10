import {
  upVoteComment as upVote,
  downVoteComment as downVote,
} from '../utils/ReadableAPI';

export const VOTE_COMMENT = 'VOTE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export function handleComments(id) {
	return dispatch => {
		return 
	}
}
export function handleUpVote(id) {
  return dispatch => {
    dispatch(upVoteComment(id));
    return upVote(id).catch(e => {
      dispatch(downVoteComment(id));
      console.log(e);
      alert('There was an error, try again.');
    });
  };
}

export function handleDownVote(id) {
  return dispatch => {
    dispatch(downVoteComment(id));
    return downVote(id).catch(e => {
      dispatch(upVoteComment(id));
      console.log(e);
      alert('There was an error, try again.');
    });
  };
}


function upVoteComment(id) {
  return {
    type: VOTE_POST,
    data: {
      id,
      vote: 1,
    },
  };
}

function downVoteComment(id) {
  return {
    type: VOTE_POST,
    data: {
      id,
      vote: -1,
    },
  };
}
