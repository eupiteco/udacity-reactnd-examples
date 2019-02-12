import API from 'goals-todos-api'

//  names
export const ADD_TODO = 'ADD_TODO'
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
		store.dispatch(removeTodo(todo.id))
		return API.deleteTodo(todo.id)
		.catch(() => {
			store.dispatch(addTodo(todo))
			alert('An error occoured. Try again.')
		})
	}
}

export function handleAddTodo(name, clearInput) {
	return (dispatch) => {
		return API.saveTodo(name)
		.then((todo) => {
			store.dispatch(addTodo(todo))
			clearInput()
		})
		.catch(() => { alert('Someting went wrong. Try again.')})
	}
}

export function handleToggleTodo(id) {
	return (dispatch) => {
		store.dispatch(toggleTodo(id))
		return API.saveTodoToggle(id)
		.catch(() => {
			store.dispatch(toggleTodo(id))
			alert('An error occoured. Try again.')
		})
	}
}
