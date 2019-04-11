import {generateHash} from './helpers';

// Frontend data sending
export function getInitialData() {
  return Promise.all([_getPosts(), _getCategories()]).then(
    ([posts, categories]) => ({
      posts,
      categories,
    }),
  );
}

export function getSinglePost(id) {
  return Promise.all([_getDetails(id), _getComments(id)]).then(
    ([details, comments]) => ({
      details,
      comments,
    }),
  );
}

export function getComments(id) {
  return _getComments(id);
}

export function upVoteComment(id) {
  return _voteComment(id, {option: 'upVote'});
}

export function downVoteComment(id) {
  return _voteComment(id, {option: 'downVote'});
}

export function upVotePost(id) {
  return _votePost(id, {option: 'upVote'});
}

export function downVotePost(id) {
  return _votePost(id, {option: 'downVote'});
}

export function newPost(data) {
  return _newPost(data);
}
// Server data handles
const api = 'http://localhost:3001';

let token = localStorage.token;
if (!token) token = localStorage.token = generateHash();
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: token,
};

const _getCategories = () =>
  fetch(`${api}/categories`, {headers})
    .then(res => res.json())
    .then(data => data.categories);

const _getPosts = () =>
  fetch(`${api}/posts`, {headers})
    .then(res => res.json())
    .then(data => data);

const _getComments = id =>
  fetch(`${api}/posts/${id}/comments`, {headers})
    .then(res => res.json())
    .then(data => data);

const _voteComment = (id, vote) =>
  fetch(`${api}/comments/${id}`, {
    headers,
    method: 'POST',
    body: JSON.stringify(vote),
  });

const _votePost = (id, vote) =>
  fetch(`${api}/posts/${id}`, {
    headers,
    method: 'POST',
    body: JSON.stringify(vote),
  });

const _newPost = (newPostData) => {
  return fetch(`${api}/posts`, {
    headers,
    method: 'POST',
		body: JSON.stringify(newPostData)
  })
    .then(res => res.json())
    .then(data => data);
};

const _getDetails = id => {
  return fetch(`${api}/posts/${id}`, {headers})
    .then(res => res.json())
    .then(data => data);
};
