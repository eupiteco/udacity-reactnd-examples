import { getInitialData } from "../utils/api"
import { receiveChirps } from "./chirps"
import { receiveUsers } from "./users"
import { setAuthedUser } from "./authedUser"

const authedId = "tylermcginnis"

export function handleInitialData () {
	return ( dispatch ) => {
		getInitialData()
			.then(({ chirps, users }) => {
				dispatch( receiveChirps(chirps) )
				dispatch( receiveUsers(users) )
				dispatch( setAuthedUser(authedId) )
			})
	}
}
