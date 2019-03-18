import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddChirp } from '../actions'
import { LoadingBar } from 'react-redux-loading'

class NewChirp extends React.Component {
	state = {
		text: "",
		toHome: false
	}

	handleChange = (e) => {
		const text = e.target.value
		this.setState(() => ({
			text,
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const { dispatch, id } = this.props
		const { text } = this.state
		dispatch(handleAddChirp(text, id))
		this.setState(() => ({
			text: '',
			toHome: true
		}))
		
	}


	render () {
		const maxLength = 280
		const { text, toHome } = this.state
		const { id } = this.props
		const charsLeft = maxLength-text.length
		if (!id && toHome === true) {
			return <Redirect to=""/>
		}
		return (
			<div>
				<LoadingBar />
				<h3 className='center'>Compose new Chirp</h3>
				<form className='new-chirp' onSubmit={ this.handleSubmit }>
					<textarea
						placeholder="What's happening?"
						value={text}
						onChange={ this.handleChange }
						className='textarea'
						maxLength={ maxLength }
					/>
					{ charsLeft <= 100 && (
						<div className='chirp-length'>
							{ charsLeft }
						</div>
					)}
					<button
						className='btn'
						type='submit'
						disabled={ text === '' }
					>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default connect()(NewChirp)
