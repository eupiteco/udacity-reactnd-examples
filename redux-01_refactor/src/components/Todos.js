import React from 'react'
import {connect} from 'react-redux'

import {handleToggleTodo, handleDeleteTodo, handleAddTodo} from '../actions'
import List from "./List"

class Todos extends React.Component {
	addItem = (e) => {
		e.preventDefault()
		this.props.dispatch(handleAddTodo(
			this.input.value,
			() => this.input.value = ''
		))
	}
	removeItem = (todo) => {
		this.props.dispatch(handleDeleteTodo(todo))
	}
	toggleItem = (id) => {
		this.props.dispatch(handleToggleTodo(id))
	}
	render() {
		return(
			<div>
				<h1>TODOS</h1>
				<input
					type="text"
					placeholder="Add Todo"
					ref={(input) => this.input = input}
				/>
				<button onClick={this.addItem}>+</button>
				<List
					items={this.props.todos}
					removeItem={this.removeItem}
					toggleItem={this.toggleItem}
				/>
			</div>
		)
	}
}

const ConnectedTodos = connect((state) => ({
	todos: state.todos
}))(Todos)

export default ConnectedTodos
