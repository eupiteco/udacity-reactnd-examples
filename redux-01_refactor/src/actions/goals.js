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
export function handleDeleteGoal(goal) {
	return (dispatch) => {
		dispatch(removeGoal(goal.id))
		return API.deleteGoal(goal.id)
		.catch(() => {
			dispatch(addGoal(goal))
			alert('An error occoured. Try again.')
		})
	}
}

export function handleAddGoal(name, clearInput) {
	return (dispatch) => {
		return API.saveGoal(name)
		.then((goal) => {
			dispatch(addGoal(goal))
			clearInput()
		})
		.catch(() => { alert('Someting went wrong. Try again.')})
	}
}
