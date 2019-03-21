import NewsAPI from "newsapi";
import axios from "axios";

import { SET_NEWS_SOURCE, GET_NEWS, GET_NEWS_SOURCES } from "../actions/types";

const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_API_KEY);

export const getNewsSources = () => dispatch => {
  axios
    .get(
      `https://newsapi.org/v2/sources?language=en&apiKey=${
        process.env.REACT_APP_NEWS_API_KEY
      }`
    )
    .then(res => {
      const allSources = res.data.sources.map(source => {
        return {
          value: source.id,
          label: source.name
        };
      });
      dispatch({
        type: GET_NEWS_SOURCES,
        payload: allSources
      });
    })
    .catch(err => console.log(err));
};

export const setNewsSource = newsSource => dispatch => {
  localStorage.setItem("newsSource", JSON.stringify(newsSource));
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
