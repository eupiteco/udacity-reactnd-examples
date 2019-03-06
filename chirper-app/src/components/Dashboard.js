import React from 'react'
import { connect } from 'react-redux'
import Chirp from './Chirp'

class Dashboard extends React.Component {
	render() {
		return (
			<ul>
				{
					this.props.chirpIds.map((id) => (
						<li key={id}><Chirp id={id}/></li>
					))
				}
			</ul>
		)
	}
}

function mapStateToProps ({ chirps }) {
	return {
		chirpIds: Object.keys(chirps)
			.sort((a,b) => chirps[b].timestamp - chirps[a].timestamp)
	}
}
export default connect(mapStateToProps)(Dashboard)
