import { GET_CURRENT_USER} from './types'
import logic from '../logic'

export const getCurrentUser = () => async dispatch => {
     const res = await logic.retrieveCurrentUser()
     dispatch({
          type: GET_CURRENT_USER,
          payload: res.data
     })
}