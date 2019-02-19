
import { RECEIVE_TWEETS } from '../actions'

export default function tweets (state={}, action) {
	switch action.type {
		case RECEIVE_TWEETS :
			return {
				...state,
				...action.tweets
		}
		case default :
			return state
	}
}
