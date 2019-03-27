// Frontend data sending
export function getInitialData() {
  return Promise.all([_getPosts(), _getCategories()]).then(
    ([posts, categories]) => ({
      posts,
      categories,
    }),
  );
}

export function upVote(id) {
  return _upVote(id);
}

export function downVote(id) {
	return _downVote(id);
}

// Server data handles
const api = 'http://localhost:3001';

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

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

const _upVote = id =>
  fetch(`${api}/posts/${id}`, {
    headers,
    method: 'POST',
    option: 'upVote',
  })

const _downVote = id =>
  fetch(`${api}/posts/${id}`, {
    headers,
    method: 'POST',
    option: 'downVote',
  })
