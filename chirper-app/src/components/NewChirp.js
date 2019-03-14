import React from 'react'

class NewChirp extends React.Component {
	state = {
		text: "",
	}

	handleChange = (e) => {
		const text = e.target.value
		this.setState(() => ({
			text,
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state.text)
		this.setState(() => ({
			text: ''
		}))
		// TODO Add new tweet to the state
	}


	render () {
		const maxLength = 280
		const { text } = this.state
		const charsLeft = maxLength-text.length
		console.log(charsLeft)
		return (
			<div>
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

export default NewChirp
