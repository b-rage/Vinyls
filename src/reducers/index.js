import { combineReducers } from 'redux'
import vinylsReducers from './vinylsReducers'
import usersReducers from './usersReducers'


export default combineReducers({
    vinyls: vinylsReducers,
    user: usersReducers
})