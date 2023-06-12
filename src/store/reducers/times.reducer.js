import { timeTypes } from "../types";

const { SET_TIME_TO_SLEEP, SET_CYCLE_LENGTH, SET_SLEEP_GOAL } = timeTypes;

const initialState = {
  selectedTime: 15,
  cycleLength: 90,
  sleepGoal: 8,
};

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_TO_SLEEP:
      return {
        ...state,
        selectedTime: action.selectedTime,
      };
    case SET_CYCLE_LENGTH:
      return {
        ...state,
        cycleLength: action.cycleLength,
      };
    case SET_SLEEP_GOAL:
      return {
        ...state,
        sleepGoal: action.sleepGoal,
      };
    default:
      return state;
  }
};

export default timeReducer;
