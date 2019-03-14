import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared.js'
import Dashboard from './Dashboard'
import NewChirp from './NewChirp'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
  render() {
    return (
      <div>
				{ this.props.loading === true
					? <h1>Loading</h1>
					: <NewChirp /> }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
	return {
		loading: authedUser === null
	}
}

export default connect(mapStateToProps)(App)
