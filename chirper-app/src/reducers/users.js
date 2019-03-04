import { RECEIVE_USERS } from "../actions"

export default function users ( state = {}, action ) {
	switch( action ) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
		}
		default: return state
	}
}
