import React from 'react'
import { connect } from 'react-redux'
import Chirp from './Chirp'
import NewChirp from './NewChirp'

class ChirpPage extends React.Component {
	render() {
		const { chirp, replies } = this.props
		return (
			<div>
				<Chirp id={chirp.id} />
				<NewChirp id={ chirp.id } />
				{ replies.length !== 0 && (<h3 className='center'>Replies</h3>) }
				<ul>
					{ replies.map(replyId => (
						<li key={ replyId }>
							<Chirp id={ replyId } />
						</li>
					)) }
				</ul>
			</div>
		)
	}
}

function mapStateToProps({ chirps }, props){
	console.log(chirps, props)
	const { id } = props.match.params
	return {
		chirp: chirps[id],
		replies: chirps[id].replies .sort((a,b) => chirps[b].timestamp - chirps[a].timestamp)
	}
}

export default connect(mapStateToProps)(ChirpPage)
