import API from 'goals-todos-api'

//  names
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

//  creators
export function addTodo (todo) {
	return {
		type: ADD_TODO,
		todo,
	}
}

export function toggleTodo (id) {
	return {
		type: TOGGLE_TODO,
		id,
	}
}

export function removeTodo (id) {
	return {
		type: REMOVE_TODO,
		id,
	}
}

// Async action dispatchers
export function handleDeleteTodo(todo) {
	return (dispatch) => {
		dispatch(removeTodo(todo.id))
		return API.deleteTodo(todo.id)
		.catch(() => {
			dispatch(addTodo(todo))
			alert('An error occoured. Try again.')
		})
	}
}

export function handleAddTodo(name, clearInput) {
	return (dispatch) => {
		return API.saveTodo(name)
		.then((todo) => {
			dispatch(addTodo(todo))
			clearInput()
		})
		.catch(() => { alert('Someting went wrong. Try again.')})
	}
}

export function handleToggleTodo(id) {
	return (dispatch) => {
		dispatch(toggleTodo(id))
		return API.saveTodoToggle(id)
		.catch(() => {
			dispatch(toggleTodo(id))
			alert('An error occoured. Try again.')
		})
	}
}
