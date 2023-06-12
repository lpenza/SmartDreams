import { timeTypes } from "../types";

const { SET_TIME_TO_SLEEP,SET_CYCLE_LENGTH,SET_SLEEP_GOAL } = timeTypes;

export const selectTime = (time) => ({
  type: SET_TIME_TO_SLEEP,
  selectedTime: time,
});

export const selecCycleLength = (qty) => ({
  type: SET_CYCLE_LENGTH,
  cycleLength: qty,
});

export const selectSleepGoal = (qty) => ({
  type: SET_SLEEP_GOAL,
  sleepGoal: qty,
});
