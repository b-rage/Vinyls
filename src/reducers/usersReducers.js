import {GET_CURRENT_USER} from '../actions/types' 

const initialState = {
    profile: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
         case GET_CURRENT_USER:
              return {
                   ...state,
                   profile: action.payload
              }
         default:
              return state
    }
}