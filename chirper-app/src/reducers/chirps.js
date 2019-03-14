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
			const { text, author, replyingTo } = action
			return {

			}
		default: return state
	}
}
