import { createStore, combineReducers } from "redux";
import { themesReducer } from "./reducers/index";

const rootReducer = combineReducers({
  themes: themesReducer,
});

export default createStore(rootReducer);