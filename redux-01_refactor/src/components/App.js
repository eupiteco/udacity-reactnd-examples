import React from 'react'
import {connect} from 'react-redux'
import ConnectedGoals from './Goals'
import ConnectedTodos from './Todos'
import { handleInitialData } from '../actions'

class App extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props
		dispatch(handleInitialData())
	}
	render() {
		if (this.props.loading === true) return <h3>Loading data...</h3>
			return (
				<div>
					<ConnectedTodos />
					<ConnectedGoals />
				</div>
			)
	}
}

const ConnectedApp = connect((state) => ({
	loading: state.loading
}))(App)

export default ConnectedApp;
