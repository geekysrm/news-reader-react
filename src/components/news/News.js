import React, { Component } from "react";
import { connect } from "react-redux";

import "./News.css";
import NewsItem from "../news-item/NewsItem";
import { getNews } from "../../actions/newsActions";
import { setNewsSource } from "../../actions/newsActions";

class NewsSources extends Component {
  async componentDidMount() {
    if (localStorage.newsSource) {
      await this.props.setNewsSource(JSON.parse(localStorage.newsSource));
      this.props.getNews(this.props.news.newsSource);
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="newslist-wrapper">
        {this.props.news.news ? (
          this.props.news.news.map(news => <NewsItem news={news} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { getNews, setNewsSource }
)(NewsSources);
