import { saveLikeToggle, saveChirp } from "../utils/api"
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

function addChirp({id, text, author, replyingTo }) {
	return {
		type: ADD_CHIRP,
		id,
		text,
		author,
		replyingTo
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

export function handleAddChirp (data) {
	return (dispatch) => {
		return saveChirp(data)
			.then((res) => {
				const {id} = res
				data.id = id
				dispatch(addChirp(data))
			})
			.catch((e) => {
				console.warn('Error, in handleToggleLike: ', e)
				alert('There was a problem adding a new tweet, please try again.')
			})
	}
}
