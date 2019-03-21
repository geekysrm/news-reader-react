import { SET_NEWS_SOURCE } from "../actions/types";

const initialState = {
  newsSource: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_NEWS_SOURCE:
      return {
        ...state,
        newsSource: action.payload
      };
    default:
      return state;
  }
}
