import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import NewsList from "./components/newslist/NewsList";

import "./App.css";
console.log(process.env.REACT_APP_NEWS_API_KEY);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={NewsList} />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
