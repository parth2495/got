import { combineReducers } from "redux";
import locationReducer from './locationReducer'
import warReducer from './warReducer'

const rootReducer  = combineReducers({
  	location: locationReducer,
  	war: warReducer
})

export default rootReducer;     