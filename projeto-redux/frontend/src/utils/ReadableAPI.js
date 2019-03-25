// Frontend data sending
export function getInitialData() {
  return Promise.all([_getPosts(), _getCategories()]).then(([posts, categories]) => ({
		posts,
		categories
	}));
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
    .then(data => data);

const _getPosts = () =>
  fetch(`${api}/posts`, {headers})
    .then(res => res.json())
    .then(data => data);
