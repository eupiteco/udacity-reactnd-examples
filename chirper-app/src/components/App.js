import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from '../actions/shared.js'
import ChirpPage from './ChirpPage'
import Dashboard from './Dashboard'
import Nav from './Nav'
import NewChirp from './NewChirp'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
  render() {
    return (
      <div>
				<LoadingBar />
				{ this.props.loading === true
					? <h1>Loading</h1>
					: <ChirpPage match={{params: { id: '8xf0y6ziyjabvozdd253nd' }}}/> }
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
