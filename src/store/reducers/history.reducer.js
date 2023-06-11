import { historyTypes } from "../types";

const { ADD_HISTORY, GET_HISTORY } = historyTypes;

const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HISTORY:
      const newHistory = action.history;
      let updatedHistory;
      if (state.history.find((item) => item.date === newHistory.date)) {
        updatedHistory = state.history.map((item) => {
          if (item.date === newHistory.date) {
            return newHistory;
          } else {
            return item;
          }
        });
      } else {
        updatedHistory = [...state.history, newHistory];
      }

      return {
        ...state,
        history: updatedHistory,
      };
    case GET_HISTORY:
      return {
        ...state,
        history: action.history,
      };
    default:
      return state;
  }
};

export default historyReducer;
