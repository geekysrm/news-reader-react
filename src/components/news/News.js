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
      <div className="newslist-wrapper">
        {this.props.news.news &&
          this.props.news.news.map(news => (
            <div className="card">
              <div className="card-header">
                <span className="news-article-source">{news.source.name}</span>
                <span>
                  {news.publishedAt.replace("T", " ").replace("Z", "")}
                </span>
              </div>
              <div className="card-body">
                <div>
                  <h5 className="card-title">
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {news.title}
                    </a>
                  </h5>
                  <p className="card-text">{news.description}</p>
                  {news.author && (
                    <p className="card-text">{news.author.toUpperCase()}</p>
                  )}
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read >
                  </a>
                </div>
                <div className="image-wrapper">
                  <img
                    src={news.urlToImage}
                    alt=""
                    width="200px"
                    height="100px"
                  />
                </div>
              </div>
            </div>
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
