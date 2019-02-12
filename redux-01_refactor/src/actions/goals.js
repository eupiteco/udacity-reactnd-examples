import API from 'goals-todos-api'

//  names
export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

//  creators
export function addGoal (goal) {
	return {
		type: ADD_GOAL,
		goal,
	}
}

export function removeGoal (id) {
	return {
		type: REMOVE_GOAL,
		id,
	}
}

// Async action dispatchers
import function handleDeleteGoal(goal) {
	return (dispatch) => {
		store.dispatch(removeGoal(goal.id))
		return API.deleteGoal(goal.id)
		.catch(() => {
			store.dispatch(addGoal(goal))
			alert('An error occoured. Try again.')
		})
	}
}

import function handleAddGoal(name, clearInput) {
	return (dispatch) => {
		return API.saveGoal(name)
		.then((goal) => {
			store.dispatch(addGoal(goal))
			clearInput()
		})
		.catch(() => { alert('Someting went wrong. Try again.')})
	}
}
