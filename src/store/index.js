import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { historyReducer,authReducer,timeReducer } from "./reducers/index";

const rootReducer = combineReducers({
  times: timeReducer,
  history:historyReducer,
  auth: authReducer,
});

export default createStore(rootReducer,applyMiddleware(thunk));