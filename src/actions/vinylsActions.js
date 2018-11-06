import { SHOW_VINYLS} from './types'
import logic from '../logic'

export const showVinyls = () => async dispatch => {
     const res = await logic.getVinyls()
     dispatch({
          type: SHOW_VINYLS,
          payload: res.data
     })
}