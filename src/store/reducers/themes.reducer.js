import { themeTypes } from "../types";

const { SELECT_THEME } = themeTypes;

const initialState = {
  selectedTheme: 'Dark',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_THEME:
      return {
        ...state,
        selectedTheme: action.selectedTheme,
      };
    default:
      return state;
  }
};

export default themeReducer;