import {
  LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS,
  SIGN_UP_REQUEST, SIGN_UP_FAIL, SIGN_UP_SUCCESS,
  LOGOUT,
  USER_INFO_GET,
} from "../types/UserTypes";

const initialState = {
  user: {},
  loading: false,
  success: false,
  error: null
}

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false
      }
    case LOGOUT:
      return {
        ...state,
        success: true,
        user: {}
      }
    default:
      return state
  }
}

export const userSignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false
      }
    case LOGOUT:
      return {
        ...state,
        user: {}
      }
    default:
      return state
  }
}


export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO_GET:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}