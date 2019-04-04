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

export function getComments(id) {
  return _getComments(id);
}

export function upVote(id) {
  return _upVote(id);
}

export function downVote(id) {
  return _downVote(id);
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

const _upVote = id =>
  fetch(`${api}/posts/${id}`, {
    headers,
    method: 'POST',
    option: 'upVote',
  });

const _downVote = id =>
  fetch(`${api}/posts/${id}`, {
    headers,
    method: 'POST',
    option: 'downVote',
  });

const _newPost = ({id, title, body, author, category, timestamp}) => {
  console.log({
    headers,
    method: 'POST',
    id,
    title,
    body,
    author,
    category,
    timestamp,
  });
  return fetch(`${api}/posts`, {
    headers,
    method: 'POST',
    id,
    title,
    body,
    author,
    category,
    timestamp,
  })
    .then(res => res.json())
    .then(data => data);
};
