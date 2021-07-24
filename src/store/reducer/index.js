// Note: Main reducer file...!

import { combineReducers } from "redux";
import apiDataReducer from "./cases";

const rootReducer = combineReducers({
  state: apiDataReducer
});


export default rootReducer;