import { combineReducers } from "redux";
import superheroReducer from "./superheroReduser";

const rootReducer = combineReducers({
	superheroReducer: superheroReducer
});

export default rootReducer;