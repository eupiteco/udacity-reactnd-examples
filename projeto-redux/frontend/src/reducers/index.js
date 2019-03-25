import { combineReducers } from 'redux'
import * as categories from './categories'
import * as posts from './posts'
import * as flags from './flags'

export default combineReducers({
	...categories,
	...posts,
	...flags
})
