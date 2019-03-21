// Root Reducer

import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
// import errorReducer from "./errorReducer";
// import profileReducer from "./profileReducer";
// import postReducer from "./postReducer";

export default combineReducers({
  news: newsReducer
  // post: postReducer
});
