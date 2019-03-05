import { FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
  items: [],
  fetching: true
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        items: action.payload,
        fetching: false
      }
    case FETCH_ERROR: return state;
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
