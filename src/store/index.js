import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { themesReducer,historyReducer,authReducer } from "./reducers/index";

const rootReducer = combineReducers({
  themes: themesReducer,
  history:historyReducer,
  auth: authReducer,
});

export default createStore(rootReducer,applyMiddleware(thunk));