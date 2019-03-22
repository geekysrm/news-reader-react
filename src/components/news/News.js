import React, { Component } from "react";
import { connect } from "react-redux";

import "./News.css";
import { getNews } from "../../actions/newsActions";
import { setNewsSource } from "../../actions/newsActions";

class NewsSources extends Component {
  async componentDidMount() {
    if (localStorage.newsSource) {
      await this.props.setNewsSource(JSON.parse(localStorage.newsSource));
      this.props.getNews(this.props.news.newsSource);
    }
    else {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="newslist-wrapper">
        {this.props.news.news ? (
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
                    Read full article
                  </a>
                </div>
                <div className="image-wrapper">
                  <img
                    src={news.urlToImage}
                    alt=""
                    width="200px"
                    height="120px"
                  />
                  <span className="share-icon">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://twitter.com/share?url=${news.url}`}
                      title="Share via Twiiter"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${
                        news.url
                      }`}
                      title="Share via Facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`mailto:?subject=${news.title}&body=${news.url}`}
                      title="Share via Email"
                    >
                      <i className="far fa-envelope" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))
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
