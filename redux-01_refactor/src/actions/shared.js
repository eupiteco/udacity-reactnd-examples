import API from 'goals-todos-api'

//  names
export const RECEIVE_DATA = 'RECEIVE_DATA'

//  creators
export function receiveData(todos, goals) {
	return {
		type: RECEIVE_DATA,
		todos,
		goals,
	}
}

// Async action dispatchers
export function handleInitialData() {
	return (dispatch) => {
		Promise.all([
			API.fetchTodos(),
			API.fetchGoals()
		]).then(([todos, goals]) => {
			dispatch(receiveData(todos, goals))
		})
	}
}

