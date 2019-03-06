import React from "react"
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'

class Chirp extends React.Component {
	render() {
		const { chirp } = this.props
		if (chirp === null) return <p>This tweet does not exists</p>
		return (
			<div>
				{JSON.stringify(this.props)}
			</div>
		)
	}
}

function mapStateToProps({ authedUser, chirps, users }, { id }) {
	const chirp = chirps[id]
	const parentChirp = chirp ? chirps[chirp.replyingTo] : null
	return {
		authedUser,
		chirp: chirp
		? formatTweet(chirp, users[chirp.author], authedUser, parentChirp)
		: null
	}
}

export default connect(mapStateToProps)(Chirp)
