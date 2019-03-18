import { RECEIVE_CHIRPS, TOGGLE_LIKE, ADD_CHIRP } from "../actions"

export default function chirps ( state = {}, action ) {
	switch( action.type ) {
		case RECEIVE_CHIRPS:
			return {
				...state,
				...action.chirps
		}
		case TOGGLE_LIKE:
			const { id, authedUser, hasLiked } = action
			return {
				...state,
				[id]: {
					...state[id],
					likes: hasLiked === true
						? state[id].likes.filter((uid) => uid !== authedUser)
						: state[id].likes.concat([authedUser])
				}
			}
		case ADD_CHIRP:
			const { chirp } = action
			let replyingTo = {}
			if (chirp.replyingTo !== null){
				replyingTo = {
					[chirp.replyingTo]: {
						...state[chirp.replyingTo],
						replies: state[chirp.replyingTo].replies.concat([chirp.id])
					}
				}
			}
			return {
				...state,
				[action.chirp.id]: action.chirp,
				...replyingTo,
			}
		default: return state
	}
}
