import { SET_NEWS_SOURCE, GET_NEWS, GET_NEWS_SOURCES } from "../actions/types";

const initialState = {
  newsSource: "",
  allSources: [],
  news: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_SOURCES:
      return {
        ...state,
        allSources: action.payload
      };
    case SET_NEWS_SOURCE:
      return {
        ...state,
        newsSource: action.payload
      };
    case GET_NEWS:
      return {
        ...state,
        news: action.payload
      };
    default:
      return state;
  }
}
