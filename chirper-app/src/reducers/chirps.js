import { RECEIVE_CHIRPS } from "../actions"

export default function chirps ( state = {}, action ) {
	switch( action.type ) {
		case RECEIVE_CHIRPS:
			return {
				...state,
				...action.chirps
		}
		default: return state
	}
}
