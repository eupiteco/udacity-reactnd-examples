import React from "react"
import { connect } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'
import { TiArrowBackOutline } from 'react-icons/ti/index'
import { TiHeartOutline } from 'react-icons/ti/index'
import { TiHeartFullOutline } from 'react-icons/ti/index'

class Chirp extends React.Component {
	
	toParent = (e, id) => {
		e.preventDefault()
	}

	handleLike = (e) => {
		e.preventDefault()
	}

	render() {
		const { chirp } = this.props
		if (chirp === null) return <p>This tweet does not exists</p>

		const {
			name,
			avatar,
			timestamp,
			text,
			hasLiked,
			likes,
			replies,
			parent
		} = chirp

		return (
			<div className="chirp">
				<img
					src={ avatar }
					alt={ `Avatar of ${name}` }
					className='avatar'
				/>
				<div className="chirp-info">
					<span>{name}</span>
					<div>{ formatDate(timestamp) }</div>
					<div>
						{ parent && (
							<button className="replying-to" onCLick={ (e) => this.toParent(e, parent.id)}>
								Replying to @{ parent.author }
							</button>
						)}
						<p>{ text }</p>
					</div>
					<div className="chirp-icons">
						<TiArrowBackOutline className="chirp-icon" />
						<span>{ replies !== 0 && replies }</span>
						<button className="heart-button" onCLick={this.handleLike}>
							{hasLiked === true
								? <TiHeartFullOutline color="tomato" className="chirp-icon" />
								: <TiHeartOutline className="chirp-icon" />}
						</button>
						<span>{ likes !== 0 && likes }</span>
					</div>
				</div>
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
