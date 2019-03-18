import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

import { handleInitialData } from '../actions/shared.js'
import ChirpPage from './ChirpPage'
import Dashboard from './Dashboard'
import NewChirp from './NewChirp'
import Nav from './Nav'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
  render() {
    return (
      <Router>
				<Fragment>
					<LoadingBar />
					<div className="container">
						< Nav />
						{ this.props.loading === true
							? <h1 className="center">Loading...</h1>
							: ( <div>
									<Route path="/" exact component={ Dashboard } />
									<Route path="/chirp/:id" component={ ChirpPage } />
									<Route path="/new" component={ NewChirp } />
								</div> )}
					</div>
				</Fragment>
			</Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
	return {
		loading: authedUser === null
	}
}

export default connect(mapStateToProps)(App)
