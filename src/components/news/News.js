import React, { Component } from "react";
import { connect } from "react-redux";

import "./News.css";
import { getNews } from "../../actions/newsActions";

class NewsSources extends Component {
  state = {
    // newsSource: []
  };
  componentDidMount() {
    this.props.getNews(this.props.news.newsSource);
  }

  render() {
    return (
      <div>
        {this.props.news.news &&
          this.props.news.news.map(news => (
            <>
              <a
                key={news.url}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {news.title}
              </a>
              <br />
            </>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { getNews }
)(NewsSources);
