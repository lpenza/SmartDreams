import {
  FIREBASE_AUTH_SIGN_IN_URL,
  FIREBASE_AUTH_SIGN_UP_URL,
} from "../../constants";
import { authTypes } from "../types";
import { FindImage, insertData } from "../../db";

const {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT,
  CLEAR_ERROR,
} = authTypes;

export const signUp = ({ email, password, name, lastName, profileImg }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SIGN_UP_REQUEST });
      const response = await fetch(FIREBASE_AUTH_SIGN_UP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const result = insertData(data.localId, profileImg);
      dispatch({
        type: SIGN_UP_SUCCESS,
        token: data.idToken,
        userId: data.localId,
        userName: name,
        userLastName: lastName,
        profileImg: profileImg,
      });
    } catch (error) {
      dispatch({
        type: SIGN_UP_FAILURE,
        error,
      });
    }
  };
};

export const signIn = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SIGN_IN_REQUEST });
      const response = await fetch(FIREBASE_AUTH_SIGN_IN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (data.error) {
        dispatch({
          type: SIGN_IN_FAILURE,
          error: data.error.message,
        });
      } else {
        const result = await FindImage(data.localId);
        const img = result?.rows?._array ? result.rows._array[0].image : "";
        dispatch({
          type: SIGN_IN_SUCCESS,
          token: data.idToken,
          userId: data.localId,
          profileImg: img,
        });
      }
    } catch (error) {
      dispatch({
        type: SIGN_IN_FAILURE,
        error,
      });
    }
  };
};

export const singOut = () => {
  return (dispatch) => {
    dispatch({ type: SIGN_OUT });
  };
};

export const clearError = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
  };
};
