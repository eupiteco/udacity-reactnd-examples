import React from 'react'
import {connect} from 'react-redux'

import {handleDeleteGoal, handleAddGoal} from '../actions'
import List from "./List"

class Goals extends React.Component {
	addItem = (e) => {
		e.preventDefault()
		this.props.dispatch(handleAddGoal(
			this.input.value,
			() => this.input.value = ''
		))
	}
	removeItem = (goal) => {
		this.props.dispatch(handleDeleteGoal(goal))
	}
	render() {
		return(
			<div>
				<h1>GOALS</h1>
				<input
					type="text"
					placeholder="Add Goal"
					ref={(input) => this.input = input}
				/>
				<button onClick={this.addItem}>+</button>
				<List
					items={this.props.goals}
					removeItem={this.removeItem}
				/>
			</div>
		)
	}
}

const ConnectedGoals = connect((state) => ({
	goals: state.goals
}))(Goals)

export default ConnectedGoals
