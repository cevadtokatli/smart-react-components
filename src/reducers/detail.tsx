import {MovieDetail} from "../types/movie"
import * as Action from "../types/detail"

export default (state:MovieDetail=null, action:Action.All) => {
    switch(action.type) {
        case Action.GET:
            return action.payload
        default:
            return state
    }
}