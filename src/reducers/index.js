import { combineReducers } from "redux";
import project from "./projectReducer";
import people from "./peopleReducer";

const rootReducer = combineReducers({
  project,
  people
});
