import { getInitialData } from "../utils/api"
import { receiveChirps } from "./chirps"
import { receiveUsers } from "./users"
import { setAuthedUser } from "./authedUser"
import { showLoading, hideLoading } from 'react-redux-loading'

const authedId = "tylermcginnis"

export function handleInitialData () {
	return ( dispatch ) => {
		dispatch(showLoading())
		return getInitialData()
			.then(({ chirps, users }) => {
				dispatch(receiveChirps(chirps))
				dispatch(receiveUsers(users))
				dispatch(setAuthedUser(authedId))
				dispatch(hideLoading())
			})
	}
}
