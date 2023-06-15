import { authTypes } from "../types";

const {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
  CLEAR_ERROR,
} = authTypes;

const initialState = {
  isLoading: false,
  error: null,
  token: null,
  userId: null,
  hasError: false,
  profileImg:'',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        userName:action.userName,
        userLastName:action.userLastName,
        profileImg:action.profileImg,
        isLoading: false,
        error: null,
        hasError: false,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        token: null,
        userId: null,
        isLoading: false,
        error: action.error,
        hasError: true,
      };
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        isLoading: false,
        profileImg:action.profileImg,
        error: null,
        hasError: false,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        token: null,
        userId: null,
        isLoading: false,
        error: action.error,
        hasError: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        token: null,
        userId: null,
        isLoading: false,
        error: null,
        hasError: false,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
        hasError: false,
      };
    default:
      return state;
  }
};

export default authReducer;
