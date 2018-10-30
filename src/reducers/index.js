import { combineReducers } from 'redux'
import vinylsReducers from './vinylsReducers';


export default combineReducers({
    vinyls: vinylsReducers
})