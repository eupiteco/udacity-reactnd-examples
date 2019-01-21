//Lib code (import)
function createStore(reducer) {
	// 1. The state
	// 2. Get the State
	// 3. Listen to changes
	// 4. Update the state

	let state
	let listeners = []

	const getState = () => state

	const subscribe = (listener) => {
		listeners.push(listener)
		return () => {
			listeners = listeners.filter((l) => l !== listener)
		}
	}

	const dispatch = (action) => {
		state = reducer(state, action)
		listeners.forEach((listener) => listener())
	}
	return {
		getState,
		subscribe,
		dispatch
	}
}

// App code
function todos (state = [], action) {
	switch(action.type) {
		case 'ADD_TODO' :
			return state.concat([action.todo])
		case 'REMOVE_TODO' :
			return state.filter(todo => todo.id !== action.id)
		case 'TOGGLE_TODO' :
			return state.map(todo =>  todo.id === action.id
				? Object.assign({}, todo, {complete: !todo.complete}) : todo )
		default:
			return state
	}
}

function goals (state = [], action) {
	switch(action.type) {
		case 'ADD_GOAL' :
			return state.concat([action.goal])
		case 'REMOVE_GOAL' :
			return state.filter(goal => goal.id !== action.id)
		default:
			return state
	}
}

function app (state = {}, action) {
	return {
		todos: todos(state.todos, action),
		goals: goals(state.goals, action),
	}
}

const store = createStore(app)

store.subscribe( () => {
	console.log('This is the new state ', store.getState())
})
