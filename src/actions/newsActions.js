import { SET_NEWS_SOURCE } from "./types";

export const setNewsSource = newsSource => dispatch => {
  localStorage.setItem("newsSource", newsSource);
  console.log(newsSource);
  dispatch({
    type: SET_NEWS_SOURCE,
    payload: newsSource
  });
};
