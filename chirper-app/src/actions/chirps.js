import { saveLikeToggle, saveChirp } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_CHIRPS = "RECEIVE_CHIRPS"
export const TOGGLE_LIKE = "TOGGLE_LIKE"
export const ADD_CHIRP = "ADD_CHIRP"

export function receiveChirps(chirps) {
	return {
		type: RECEIVE_CHIRPS,
		chirps,
	}
}

function toggleLike({ id, authedUser, hasLiked }) {
	return {
		type: TOGGLE_LIKE,
		id,
		authedUser,
		hasLiked
	}
}

function addChirp(chirp) {
	return {
		type: ADD_CHIRP,
		chirp,
	}
}

export function handleToggleLike (data) {
	return (dispatch) => {
		dispatch(toggleLike(data))

		return saveLikeToggle(data)
			.catch((e)=> {
				console.warn('Error, in handleToggleLike: ', e)
				dispatch(toggleLike(data))
				alert('There was an error liking the tweet. Try again.')
			})
	}
}

export function handleAddChirp (text, replyingTo) {
	return (dispatch, getState) => {

		const { authedUser } = getState()
		dispatch(showLoading())
		return saveChirp({
			text,
			author: authedUser,
			replyingTo
		})
			.then((chirp) => dispatch(addChirp(chirp)))
			.then(() => dispatch(hideLoading()))
	}
}
