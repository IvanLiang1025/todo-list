
import {homeReducer} from "../home/store";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    home: homeReducer
})

export default rootReducer;