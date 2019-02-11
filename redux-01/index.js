// App code
function generateId () {
	return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

//Action names
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

const RECEIVE_DATA = 'RECEIVE_DATA'

// Action creators
function addTodoAction (todo) {
	return {
		type: ADD_TODO,
		todo,
	}
}

function toggleTodoAction (id) {
	return {
		type: TOGGLE_TODO,
		id,
	}
}

function removeTodoAction (id) {
	return {
		type: REMOVE_TODO,
		id,
	}
}

function addGoalAction (goal) {
	return {
		type: ADD_GOAL,
		goal,
	}
}

function removeGoalAction (id) {
	return {
		type: REMOVE_GOAL,
		id,
	}
}

function receiveDataAction(todos, goals) {
	return {
		type: RECEIVE_DATA,
		todos,
		goals,
	}
}

// Thunk functions

function handleInitialData() {
	return (dispatch) => {
		Promise.all([
			API.fetchTodos(),
			API.fetchGoals()
		]).then(([todos, goals]) => {
			store.dispatch(receiveDataAction(todos, goals))
		})
	}
}

function handleDeleteTodo(todo) {
	return (dispatch) => {
		store.dispatch(removeTodoAction(todo.id))
		return API.deleteTodo(todo.id)
		.catch(() => {
			store.dispatch(addTodoAction(todo))
			alert('An error occoured. Try again.')
		})
	}
}

function handleAddTodo(name, clearInput) {
	return (dispatch) => {
		return API.saveTodo(name)
		.then((todo) => {
			store.dispatch(addTodoAction(todo))
			clearInput()
		})
		.catch(() => { alert('Someting went wrong. Try again.')})
	}
}

function handleToggleTodo(id) {
	return (dispatch) => {
		store.dispatch(toggleTodoAction(id))
		return API.saveTodoToggle(id)
		.catch(() => {
			store.dispatch(toggleTodoAction(id))
			alert('An error occoured. Try again.')
		})
	}
}
function handleDeleteGoal(goal) {
	return (dispatch) => {
		store.dispatch(removeGoalAction(goal.id))
		return API.deleteGoal(goal.id)
		.catch(() => {
			store.dispatch(addGoalAction(goal))
			alert('An error occoured. Try again.')
		})
	}
}

function handleAddGoal(name, clearInput) {
	return (dispatch) => {
		return API.saveGoal(name)
		.then((goal) => {
			store.dispatch(addGoalAction(goal))
			clearInput()
		})
		.catch(() => { alert('Someting went wrong. Try again.')})
	}
}

// Reducers
function todos (state = [], action) {
	switch(action.type) {
		case ADD_TODO :
			return state.concat([action.todo])
		case REMOVE_TODO :
			return state.filter((todo) => todo.id !== action.id)
		case TOGGLE_TODO :
			return state.map((todo)=>  todo.id === action.id
				? Object.assign({}, todo, {complete: !todo.complete}) : todo )
		case RECEIVE_DATA:
			return action.todos
		default:
			return state
	}
}

function goals (state = [], action) {
	switch(action.type) {
		case ADD_GOAL :
			return state.concat([action.goal])
		case REMOVE_GOAL :
			return state.filter((goal) => goal.id !== action.id)
		case RECEIVE_DATA:
			return action.goals
		default:
			return state
	}
}

function loading (state = true, action) {
	switch(action.type) {
		case RECEIVE_DATA:
			return false
		default:
			return state
	}
}

const checker = (store) => (next) => (action) => {
	if (
			action.type === ADD_TODO &&
			action.todo.name.toLowerCase().includes('bitcoin')
		 ) {
			return alert("Bad idea :/")
		 }

	if (
			action.type === ADD_GOAL &&
			action.goal.name.toLowerCase().includes('bitcoin')
		 ) {
			return alert("Bad idea :/")
		 }

	return next(action)
}

const logger = (store) => (next) => (action) => {
	console.group(action.type)
		console.log('The action: ', action)
		const result = next(action)
		console.log('The new state: ', store.getState())
	console.groupEnd()

	return result
}

// Criando a store/observable
const rootReducer = Redux.combineReducers({
	todos,
	goals,
	loading,
})

const middlewares = Redux.applyMiddleware(
	ReduxThunk.default,
	checker,
	logger
)
const store = Redux.createStore(rootReducer, middlewares)

/*
store.subscribe( () => {
	const {goals, todos} = store.getState()

	document.getElementById('todo-items').innerHTML = ''
	document.getElementById('goal-items').innerHTML = ''

	goals.forEach(addGoalToDom)
	todos.forEach( todo => {
		addTodoToDom(todo)
		//document.getElementById(todo.id)
		//	.addEventListener('click', console.log('clicou'))
	})
})

// Dom actions

function createRemoveBtn(onClick) {
	const removeBtn = document.createElement('button')
	removeBtn.innerHTML = 'X'
	removeBtn.addEventListener('click', onClick)
	return removeBtn
}

// Dispatching add function
function addTodo() {
	const input = document.getElementById('todo-input')
	const name = input.value
	input.value = ''

	store.dispatch(addTodoAction({
		name,
		complete: false,
		id: generateId()
	}))
}

function addGoal() {
	const input = document.getElementById('goal-input')
	const name = input.value
	input.value = ''

	store.dispatch(addGoalAction({
		name,
		id: generateId()
	}))
}

// Vinculando botões nas funções
document.getElementById('todo-btn')
.addEventListener('click', addTodo)

document.getElementById('goal-btn')
.addEventListener('click', addGoal)

// adicionando elementos no Dom
function addTodoToDom(todo) {
	const node =  document.createElement('li')
	const text = document.createTextNode(todo.name)
	const removeBtn = createRemoveBtn(() => {
		store.dispatch(removeTodoAction(todo.id))
	})
	node.appendChild(text)
	node.appendChild(removeBtn)
	node.style.textDecoration = todo.complete
		? "line-through"
		: "none"
	node.addEventListener('click', () => {
		store.dispatch(toggleTodoAction(todo.id))
	})

	document.getElementById('todo-items')
	.appendChild(node)
}

function addGoalToDom(goal) {
	const node =  document.createElement('li')
	const text = document.createTextNode(goal.name)
	const removeBtn = createRemoveBtn(() => {
		store.dispatch(removeGoalAction(goal.id))
	})
	node.appendChild(text)
	node.appendChild(removeBtn)
	node.id = goal.id

	document.getElementById('goal-items')
	.appendChild(node)
}
*/
