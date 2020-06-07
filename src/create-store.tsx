import {createStore, combineReducers} from "redux"
import list from "./reducers/list"
import detail from "./reducers/detail"

export default initialState => createStore(combineReducers({list,detail}), initialState)