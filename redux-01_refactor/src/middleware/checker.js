
import { ADD_TODO, ADD_GOAL } from "../actions"

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

export default checker
