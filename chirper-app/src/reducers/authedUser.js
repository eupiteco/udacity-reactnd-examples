import { SET_AUTHED_USER } from "../actions"

export default function authedUser ( state = null, action ) {
	switch( action ) {
		case SET_AUTHED_USER:
			return {
				...state,
				...action.authedUser
		}
		default: return state
	}
}
