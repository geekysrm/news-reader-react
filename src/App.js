import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import NewsSources from "./components/news-sources/NewsSources";
import News from "./components/news/News";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={NewsSources} />
            <Route exact path="/news" component={News} />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
