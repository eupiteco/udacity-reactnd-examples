import { getInitialData } from '../utils/api'
import { receiveUsers, receiveUsers, setAuthedUser } from './index'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
	return (dispatch) => {
		return getInitialData()
			.then(({ users, tweets}) => {
				dispatch(receiveTweets(tweets))
				dispatch(receiveUsers(users))
				dispatch(setAuthedUser(AUTHED_ID))
			})
	}
}
