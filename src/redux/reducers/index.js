import { combineReducers } from 'redux'

import user from './user'
import posts from './posts'
import comments from './comments'
import message from './message'

export default combineReducers({ user, posts, comments, message })