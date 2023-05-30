import { themeTypes } from "../types";

const { SELECT_THEME } = themeTypes;

export const selectTheme = (theme) => ({
  type: SELECT_THEME,
  selectedTheme: theme,
});
