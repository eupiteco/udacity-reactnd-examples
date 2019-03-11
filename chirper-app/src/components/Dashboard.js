import React from 'react'
import { connect } from 'react-redux'
import Chirp from './Chirp'

class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<h1 className="center">Chirper App</h1>
				<ul>
					{
						this.props.chirpIds.map((id) => (
							<li key={id}><Chirp id={id}/></li>
						))
					}
				</ul>
			</div>
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
