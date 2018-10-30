import {SHOW_VINYLS} from '../actions/types' 

const initialState = {
    vinyls: []
}

export default function(state = initialState, action) {
    switch(action.type) {
         case SHOW_VINYLS:
              return {
                   ...state,
                   vinyls: action.payload
              }
         default:
              return state
    }
}