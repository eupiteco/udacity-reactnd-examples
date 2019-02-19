import {combineReducers} from 'redux'
import setAuthedUser from './authedUser'
import users from './users'
import tweets from './tweets'

export default combineReducers({
	setAuthedUser,
	users,
	tweets,
})
