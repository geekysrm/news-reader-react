import NewsAPI from "newsapi";

import { SET_NEWS_SOURCE } from "./types";
import { GET_NEWS } from "./types";

const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_API_KEY);

export const setNewsSource = newsSource => dispatch => {
  localStorage.setItem("newsSource", newsSource);
  console.log(newsSource);
  dispatch({
    type: SET_NEWS_SOURCE,
    payload: newsSource
  });
};

export const getNews = newsSources => dispatch => {
  const sourcesValues = newsSources.map(newsSource => newsSource.value);
  console.log(sourcesValues);
  newsapi.v2
    .everything({
      sources: sourcesValues,
      language: "en"
    })
    .then(response => {
      response.articles.sort((a, b) => {
        var keyA = new Date(a.publishedAt),
          keyB = new Date(b.publishedAt);
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });
      console.log(response.articles);
      dispatch({
        type: GET_NEWS,
        payload: response.articles
      });
    });
};
