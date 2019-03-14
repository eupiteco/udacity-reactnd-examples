import { saveLikeToggle } from "../utils/api"
export const RECEIVE_CHIRPS = "RECEIVE_CHIRPS"
export const TOGGLE_LIKE = "TOGGLE_LIKE"

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
