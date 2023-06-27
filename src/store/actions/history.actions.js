import { historyTypes } from "../types";
import { FIREBASE_REALTIME_DB_URL } from "../../constants";

const { ADD_HISTORY, GET_HISTORY } = historyTypes;

export const addHistory = (history) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/history.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: history.date,
          hours: history.hours,
          cycles: history.cycles,
          timeSelected: history.timeSelected,
          wakeUpTime: history.wakeUpTime,
        }),
      });

      dispatch({
        type: ADD_HISTORY,
        history,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getHistory = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/history.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = (await response.json()) || [];

      const history = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));

      dispatch({
        type: GET_HISTORY,
        history,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
