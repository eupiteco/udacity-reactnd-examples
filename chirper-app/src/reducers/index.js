import { combineReducers } from "redux"
import { loadingBarReducer } from 'react-redux-loading'

import authedUser from "./authedUser"
import chirps from "./chirps"
import users from "./users"

export * from "./authedUser"
export * from "./chirps"
export * from "./users"

export default combineReducers({
		authedUser,
		chirps,
		users,
		loadingBar: loadingBarReducer
	})

