import {FETCH_TICKETS} from '../actions/types'

export default function(state=null, action) {
    switch(action.type) {
        case FETCH_TICKETS:
            return action.payload
        default:
            return state
    }
}